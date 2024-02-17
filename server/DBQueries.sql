
-- $$ is used to create multiline syntax. It can also be done with out $$ by using ''

create or replace function
  public.handle_new_user () returns trigger as $$
begin
  insert into public."Customers" (id, created_at, "displayName", cart, orders)
  values (new.id, current_timestamp, '', null, ARRAY[]::text[]);
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger
  on_auth_user_created
after
  insert on auth.users for each row
execute
  procedure public.handle_new_user ();

-- For Getting Cart data by customer_id
create or replace function public.get_data_cart_products (customer_id uuid) returns table (
  cart_product_id uuid,
  "customerId" uuid,
  created_at timestamp with time zone,
  "productName" varchar,
  description text,
  price float,
  category text,
  discount smallint,
  "productImages" text[],
  id uuid
) as $$ 
  BEGIN
    RETURN QUERY     
    SELECT "Carts_Products".id as car_prduct_id, "Carts"."customerId", "Products".*     
    FROM "Carts_Products"     
    INNER JOIN "Carts" ON "Carts".id = "Carts_Products"."cartId"     
    INNER JOIN "Products" ON "Products"."id" = "Carts_Products"."productId"     
    WHERE "Carts"."customerId" = customer_id; 
  END;
$$ language plpgsql;

-- Usage of  single cots
-- create or replace function
--   public.handle_new_user () returns trigger as '
-- begin
--   insert into public."Customers" (id, created_at, "displayName", cart, orders)
--   values (new.id, current_timestamp, '', null, ARRAY[]::text[]);
--   return new;
-- end;' language plpgsql security definer;