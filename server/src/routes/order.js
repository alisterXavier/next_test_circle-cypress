import express from 'express';
import { supabase } from '../../supabaseConfig';
import { authUser } from '../middleware';

const app = express();

// Create a final order
app.post('/order/:customerId/:cartId', authUser, async (req, res) => {
  const { cartId, customerId } = req.params;

  try {
    const { data, error } = await supabase
      .from('Carts')
      .select()
      .eq('id', cartId)
      .single();

    if (error)
      return res
        .status(400)
        .json({ function: 'Carts get', error: error.message });

    const { data: orderData, error: orderError } = await supabase
      .from('Orders')
      .upsert({
        customerId: data.customerId,
        products: data.products,
        total: data.total,
      });

    if (orderError)
      return res
        .status(400)
        .json({ function: 'Orders insert', error: error.message });

    //clearing the user's cart here.
    const { err: deleteErr } = await supabase
      .from('Carts')
      .delete()
      .eq('id', cartId);

    if (deleteErr)
      return res
        .status(400)
        .json({ function: 'Cart delete', error: error.message });

    return res.status(200).json({ message: 'Order created', orderData });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

// Getting orders
app.get('/orders/:id', authUser, async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('Orders')
      .select(
        'id, customerId, products: Orders_Products(...Products(*), quantity), total, created_at'
      )
      .eq('customerId', id)

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});
export { app as orderRoute };
