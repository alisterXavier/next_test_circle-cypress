import './styles.css';
import { useEffect, useRef, useState } from 'react';
import { Account, Buttons, LoginSignUp, Logo } from './Header';
import { usePathname, useRouter } from 'next/navigation';
import { UserMetadata } from '@supabase/supabase-js';
import Link from 'next/link';
import { selectAuthState } from '@/shared/redux/authSlice';
import { useSelector } from 'react-redux';
import { IconSearch, IconShoppingCart } from '@tabler/icons-react';
import { Text, TextInput } from '@mantine/core';
import { motion } from 'framer-motion';
import { useCustomerCart } from '@/shared/hooks/cart';

type NavbarCarttype = {
  path: string;
  onMouseEnter: (e: React.MouseEvent) => void;
  onMouseLeave: (e: React.MouseEvent) => void;
  user: UserMetadata;
};

type NavbarType = {
  path: string;
  user?: UserMetadata | null;
};

const NavbarCart = ({
  path,
  onMouseEnter,
  onMouseLeave,
  user,
}: NavbarCarttype) => {
  const { cart, isLoading } = useCustomerCart(user.id);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (cart?.products.length) {
      const totalProducts = cart?.products.reduce((total, b) => {
        return total + b.quantity;
      }, 0);
      setCount(totalProducts);
    }
  }, [cart]);

  return (
    <Buttons
      customClassName={'navbar-right-item'}
      type={path === '/basket'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        className="armyText relative"
        id="cart"
        href={`/cart`}
        data-cy={'test-cart'}
      >
        {cart?.products && (
          <span className="absolute flex justify-center items-center w-[20px] h-[20px] bg-[var(--testColor)] -top-2 -right-2 rounded-[50%]">
            <Text c={'white'} m={0} p={0} h={20}>
              {count}
            </Text>
          </span>
        )}
        <IconShoppingCart size={30} />
      </Link>
    </Buttons>
  );
};

export const Navbar = ({ user, path }: NavbarType) => {
  const sliderRef = useRef(null);

  const router = useRouter();

  const [searchToggle, setSearchToggle] = useState<boolean>(false);

  const onMouseEnter = (e: React.MouseEvent) => {
    const { id } = e.currentTarget.querySelector('a') as HTMLElement;

    const translate =
      id === 'home'
        ? '0px'
        : id === 'men'
        ? '90px 0px'
        : id === 'women'
        ? '180px 0px'
        : id === 'kids'
        ? '270px 0px'
        : '360px 0px';
    if (sliderRef.current) {
      (sliderRef.current as HTMLElement).style.translate = translate;
    }
  };
  const onMouseLeave = (e: React.MouseEvent) => {
    if (path) navChangeOnPath.current(path);
    else if (sliderRef.current) {
      (sliderRef.current as HTMLElement).removeAttribute('style');
    }
  };
  const navChangeOnPath = useRef((path: string) => {
    const translateMap = {
      Electronics: '360px 0px',
      Men: '90px 0px',
      Women: '180px 0px',
      Kids: '270px 0px',
      default: '0px',
    };
    var translate = path.split('/').reduce((acc, seg) => {
      return (translateMap as Record<string, string>)[seg] || acc;
    }, translateMap['default']);

    if (sliderRef.current && translate) {
      (sliderRef.current as HTMLElement).style.translate = translate;
    }
  });

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      router.push(`/search/${(e.target as HTMLInputElement).value}`);
    }
  };
  useEffect(() => {
    navChangeOnPath.current(path);
  }, [path]);

  return (
    <motion.nav className="navbar-wrapper">
      <div className="navbar-container relative z-[2]">
        <div className="navbar-items" data-cy={'test-nav-items'}>
          <Buttons
            type={path === '/'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link className="armyText" id="home" href="/">
              Home
            </Link>
          </Buttons>
          <Buttons
            type={path === '/Men'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link id="men" className="armyText" href="/category/Men">
              Men
            </Link>
          </Buttons>
          <Buttons
            type={path === '/Women'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link className="armyText" id="women" href="/category/Women">
              Women
            </Link>
          </Buttons>
          <Buttons
            type={path === '/Kids'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link className="armyText" id="kids" href="/category/Kids">
              Kids
            </Link>
          </Buttons>
          <Buttons
            type={path === '/Electronics'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              className="armyText"
              id="electronics"
              href="/category/Electronics"
            >
              Electronics
            </Link>
          </Buttons>
          <span className="navbar-item-slider" ref={sliderRef} />
        </div>
        <Logo />
        <div className="flex">
          <div className="flex items-center justify-center">
            <div className="py-[4px] px-[10px]">
              <IconSearch
                size={30}
                color="black"
                cursor={'pointer'}
                onClick={() => setSearchToggle(!searchToggle)}
                data-cy={'test-search'}
              />
            </div>
          </div>
          {user ? (
            <>
              <NavbarCart
                path={path}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                user={user}
              />
              <Account user={user} />
            </>
          ) : (
            <LoginSignUp />
          )}
        </div>
      </div>
      <motion.div
        className="z-[1] relative shadow-xl"
        initial={{
          translateY: '-100%',
        }}
        transition={{ type: 'tween' }}
        animate={
          searchToggle
            ? {
                translateY: '0%',
              }
            : {
                translateY: '-100%',
              }
        }
        data-cy={'test-search-input'}
      >
        <TextInput
          placeholder="Search for products"
          height={50}
          radius={0}
          onKeyDown={handleSearch}
        />
      </motion.div>
    </motion.nav>
  );
};

export const NavbarComponent = () => {
  const path = usePathname();
  const authState = useSelector(selectAuthState);
  const [user, setUser] = useState<UserMetadata | null>();
  useEffect(() => {
    const getUser = async () => {
      const user = authState?.data.user;
      setUser(user);
    };
    getUser();
  }, [authState]);

  return <Navbar path={path} user={user} />;
};
