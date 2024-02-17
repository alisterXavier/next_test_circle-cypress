import axios from 'axios';
import { Initilize, Session } from '.';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectSession } from '../redux/authSlice';

const axiosInstance = axios.create({
  // withCredentials: true,
});

export const useSwrInstance = () => {
  const getSession = useSelector(selectSession);
  const [session, setSession] = useState<Session>();
  
  useEffect(() => {
    if (getSession?.session) {
      const data = getSession;
      setSession(data);
    }
  }, [getSession]);

  const { requests, queries } = Initilize(axiosInstance, session);

  return {
    requests,
    queries,
  };
};
