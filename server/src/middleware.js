import { supabase } from '../supabaseConfig';

export const authUser = async (req, res, next) => {
  const token = req.get('token');
  const rtoken = req.get('rtoken');

  if (!token && !rtoken)
    return res.status(401).json({ error: 'Unauthorized user' });

  // set the session for auth user
  const { data } = await supabase.auth.setSession({
    access_token: token,
    refresh_token: rtoken,
  });

  if (!data) return res.status(401).json({ error: 'Unauthorized user' });
  next();
};
