import express from 'express';
import { supabase } from '../../supabaseConfig';
import { authUser } from '../middleware';

const app = express();

// Register user with email and pass
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ message: 'Registration successful', user });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

app.get('/customer/:id', authUser, async (req, res) => {
  const { id } = req.params;
  
  if (id.length > 5)
    try {
      if (error) {
        return res.status(400).json({ error: error.message });
      }

      return res
        .status(200)
        .json({ message: 'Login successful', user, session });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  return res.status(500).json({ error: 'Incorrect id' });
});

export { app as userRoute };
