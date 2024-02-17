'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavbarComponent } from './Navbar/Navbar';
import { usePathname } from 'next/navigation';
import { MantineProvider, createTheme } from '@mantine/core';
import { AppDispatch, store } from '@/shared/redux/store';
import { Provider, useDispatch } from 'react-redux';
// import { setAuthState } from '@/shared/redux/authSlice';
import { supabase } from '@/shared/supabaseConfig';
import { useEffect } from 'react';
import { fetchSession, fetchUser } from '@/shared/redux/authSlice';
import { Toaster } from 'react-hot-toast';
import { useSmallDeviceSize } from '@/shared/hooks/smallScreen';
import { FooterSection } from './Components/footer/footer';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({});
function RootLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const device = useSmallDeviceSize();
  const notHomePage = path.split('/').some((i) => i.length > 0) ? true : false;
  const onLoginPage = path
    .split('/')
    .some((i) => i === 'login' || i == 'signUp')
    ? true
    : false;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <Provider store={store}>
          <MantineProvider theme={theme}>
            <InnerRoot>
              <>
                {(!onLoginPage || device) && <NavbarComponent />}
                {children}
                {!onLoginPage && <FooterSection enableDark={notHomePage} />}
              </>
            </InnerRoot>
          </MantineProvider>
        </Provider>
      </body>
    </html>
  );
}

export const InnerRoot = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
        dispatch(fetchUser(supabase));
        dispatch(fetchSession(supabase));
      } else if (event === 'SIGNED_OUT') {
        dispatch(fetchUser(null));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [dispatch]);

  return children;
};
export default RootLayout;
