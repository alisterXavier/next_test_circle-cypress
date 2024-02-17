'use client';
import '@mantine/core/styles.css';
import { Combobox, useCombobox } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import Image from 'next/image';
import * as React from 'react';
import { supabase } from '@/shared/supabaseConfig';
import { UserMetadata } from '@supabase/supabase-js';
import logo from '@/public/images/Logo.jpg';
import Link from 'next/link';

interface IButton {
  customClassName?: string;
  children: React.ReactNode;
  type: boolean;
  onMouseEnter: (e: React.MouseEvent) => void;
  onMouseLeave: (e: React.MouseEvent) => void;
}

export const Logo = () => {
  return (
    <div className="navbar-item ml-auto mr-auto">
      <Link href="/" className="navbar-item-header armyText">
        <figure className="relative w-[100px] h-[100px]">
          <Image alt="logo" src={logo}    style={{
              objectFit: 'contain',
            }} fill data-cy={'test-logo'}/>
        </figure>
      </Link>
    </div>
  );
};

export const Buttons = ({
  children,
  type,
  onMouseEnter,
  onMouseLeave,
  customClassName,
}: IButton) => {
  return (
    <div
      className={`navbar-item ${customClassName}`}
      data-active={type}
      onMouseEnter={(event: React.MouseEvent) => onMouseEnter(event)}
      onMouseLeave={(event: React.MouseEvent) => onMouseLeave(event)}
    >
      {children}
    </div>
  );
};

export const Account = ({ user }: { user: UserMetadata }) => {
  const combOptions = [
    {
      name: 'Settings',
      url: '',
    },
    {
      name: 'Orders',
      url: '/orders',
    },
    {
      name: 'Sign Out',
      url: '',
    },
  ];
  // const router = useRouter();
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const signOut = async () => {
    if (supabase) await supabase.auth.signOut();
  };

  const options = combOptions.map((item, index) => (
    <Combobox.Option
      w={'200px'}
      value={item as unknown as string}
      key={index}
      onClick={() => {
        if (item.name === 'Sign Out') signOut();
      }}
      data-cy={'test-user-options-item'}
    >
      {item.name === 'signOut' ? (
        <p>{item.name}</p>
      ) : (
        <a href={item.url}>{item.name}</a>
      )}
    </Combobox.Option>
  ));

  return (
    <div
      className="navbar-item navbar-right-item navbar-item-account w-[400px]"
      data-cy={'test-user'}
    >
      <Combobox
        variant=""
        width={'200px'}
        store={combobox}
        onOptionSubmit={(val) => {
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <figure
            className="navbar-account-logo"
            onClick={() => combobox.toggleDropdown()}
          >
            {user.avatar_url ? (
              <Image src={user.avatar_url} alt={'UserProfile'} fill />
            ) : (
              <IconUser />
            )}
          </figure>
        </Combobox.Target>

        <Combobox.Dropdown w={'200px'} data-cy={'test-user-options'} mt={15}>
          <Combobox.Options w={'200px'}>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
};

export const LoginSignUp = () => {
  return (
    <div className="navbar-item navbar-item-account" data-cy={'test-nav-items'}>
      <Link href="/login">Login</Link>
    </div>
  );
};
