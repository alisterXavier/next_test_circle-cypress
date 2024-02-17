import express from 'express';
import { supabase } from '../../supabaseConfig';
import { authUser } from '../middleware';

const app = express();

// Update Cart
app.patch('/cart', authUser, async (req, res) => {
  const { customerId, products, id, total } = req.body;

  try {
    const { data: cartData, error: CartError } = await supabase
      .from('Carts')
      .upsert(
        {
          id: id,
          products: [...products],
          customerId: customerId,
          total: total ?? 0,
        },
        { ignoreDuplicates: false }
      );

    if (CartError) {
      return res.status(400).json({ error: CartError.message });
    }

    const { data } = await supabase
      .from('Carts')
      .select(
        'id, customerId, products: Carts_Products(...Products(*), quantity), total'
      )
      .eq('customerId', customerId)
      .single();

    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/cart/:id', authUser, async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('Carts')
      .select(
        'id, customerId, products: Carts_Products(...Products(*), quantity), total'
      )
      .eq('customerId', id)
      .single();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

export { app as cartRoute };
