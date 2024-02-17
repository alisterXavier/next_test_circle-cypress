'use client';
import { useCustomerCart } from '@/shared/hooks/cart';
import { selectAuthState } from '@/shared/redux/authSlice';
import {
  Button,
  Combobox,
  Flex,
  Group,
  InputBase,
  PasswordInput,
  Radio,
  TextInput,
  useCombobox,
  Text,
  Modal,
} from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import ComboboxWrapper from './combobox';
import { CartTable } from '../cart/components/children';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useOrders } from '@/shared/hooks/order';
import { SkeletonContainer } from '../Components/SkeletonComp';
import { useRouter } from 'next/navigation';

type checkoutInformationType = {
  name: {
    first: {
      state?: string;
      setState: React.Dispatch<React.SetStateAction<string | undefined>>;
    };
    last: {
      state?: string;
      setState: React.Dispatch<React.SetStateAction<string | undefined>>;
    };
  };
  postal: {
    state?: string;
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
  };
  payment: {
    state?: string;
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
  };
  country: {
    state?: string;
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
  };
  city: {
    state?: string;
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
  };
};
type BillingType = {
  name: {
    first?: string;
    last?: string;
  };
  postal?: string;
  country?: string;
  payment?: string;
  city?: string;
};

const CountriesList = ({
  country,
  city,
}: {
  country: {
    state?: string;
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
  };
  city: {
    state?: string;
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
  };
}) => {
  const countryCombo = useCombobox({
    onDropdownClose: () => countryCombo.resetSelectedOption(),
  });
  const cityCombo = useCombobox({
    onDropdownClose: () => cityCombo.resetSelectedOption(),
  });
  const { data: Countries, isLoading: loadingCountries } = useSWR(
    'https://countriesnow.space/api/v0.1/countries',
    (url) => axios.get(url)
  );
  const [countrySearch, setCountrySearch] = useState<string>('');
  const [citySearch, setCitySearch] = useState<string>('');
  const [countryFilter, setCountryFilter] = useState<
    { country: string; cities: string[] }[]
  >([]);
  const filteredCountriesList = countryFilter?.map(
    (i: { country: string }) => i.country
  );
  const filteredCitiesList = countryFilter?.[0]?.cities
    ?.map((item: string) => item)
    .filter((i: string) =>
      citySearch.length > 0
        ? i.toLowerCase().includes(citySearch.toLowerCase())
        : i
    );

  const countriesOptions = filteredCountriesList?.map(
    (item: string, index: number) => (
      <Combobox.Option
        w={'97%'}
        value={item as unknown as string}
        key={index}
        data-cy={'test-countries-options-item'}
      >
        {item}
      </Combobox.Option>
    )
  );
  const citiesOptions = filteredCitiesList?.map(
    (city: string, index: number) => (
      <Combobox.Option
        w={'97%'}
        value={city}
        key={index}
        data-cy={'test-cities-options-item'}
      >
        {city}
      </Combobox.Option>
    )
  );

  useEffect(() => {
    const c = Countries?.data.data?.filter((i: { country: string }) =>
      i.country?.toLowerCase().includes(countrySearch.toLowerCase().trim())
    );
    setCountryFilter(c);
  }, [Countries, countrySearch]);

  return (
    <>
      <ComboboxWrapper
        search={countrySearch}
        setSearch={setCountrySearch}
        setState={country.setState}
        label="Country"
        comboState={countryCombo}
      >
        {countriesOptions}
      </ComboboxWrapper>

      <ComboboxWrapper
        search={citySearch}
        setSearch={setCitySearch}
        setState={city.setState}
        comboState={cityCombo}
        label="City"
      >
        {citiesOptions}
      </ComboboxWrapper>
    </>
  );
};

const Payment = ({
  value,
  setValue,
}: {
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <>
      <h1 className="text-[17px] border-b border-gray-500 m-0">
        Payment Method
      </h1>
      <div>
        <Radio.Group
          value={value}
          onChange={setValue}
          name="payment"
          color="lime.4"
          withAsterisk
        >
          <Group mt="xs">
            <Radio
              value="Google Pay"
              label="Google Pay"
              color="var(--testColor)"
            />
            <Radio
              value="Apple Pay"
              label="Apple Pay"
              color="var(--testColor)"
            />
            <Radio
              value="Credit/Debit Card"
              label="Credit/Debit Card"
              color="var(--testColor)"
            />
          </Group>
        </Radio.Group>
        {value === 'Credit/Debit Card' ? (
          <div className="w-[50%]">
            <TextInput
              label="Card Number"
              m={10}
              placeholder="XXXX XXXX XXXX XXXX"
              styles={{
                input: {
                  boxShadow: '20px 20px 48px #bebebe, -20px -20px 48px #ffffff',
                  border: '.1px solid var(--testColor)',
                },
                label: {
                  position: 'relative',
                  zIndex: 1,
                },
              }}
            />
            <Flex>
              <TextInput
                styles={{
                  input: {
                    boxShadow:
                      '20px 20px 48px #bebebe, -20px -20px 48px #ffffff',
                    border: '.1px solid var(--testColor)',
                  },
                  label: {
                    position: 'relative',
                    zIndex: 1,
                  },
                }}
                label="Exipration Date"
                description={<p className="relative z-[1]">(MM/YY)</p>}
                w={300}
                m={10}
              />
              <PasswordInput
                styles={{
                  input: {
                    boxShadow:
                      '20px 20px 48px #bebebe, -20px -20px 48px #ffffff',
                    border: '.1px solid var(--testColor)',
                  },
                  label: {
                    position: 'relative',
                    zIndex: 1,
                  },
                }}
                label="CVV/CVC"
                description={<p className="relative z-[1]">(MM/YY)</p>}
                w={300}
                m={10}
              />
            </Flex>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

const CheckoutInformation = ({
  name,
  postal,
  country,
  payment,
  city,
}: checkoutInformationType) => {
  return (
    <div>
      <div className="py-5">
        <div>
          <Flex>
            <TextInput
              label="First Name"
              w={300}
              m={10}
              value={name.first.state}
              onChange={(event) => {
                name.first.setState(event.currentTarget.value);
              }}
              styles={{
                input: {
                  border: '.1px solid var(--testColor)',
                  boxShadow: '20px 20px 48px #bebebe,-20px -20px 48px #ffffff',
                },
                label: {
                  position: 'relative',
                  zIndex: 1,
                },
              }}
            />
            <TextInput
              styles={{
                input: {
                  border: '.1px solid var(--testColor)',
                  boxShadow: '20px 20px 48px #bebebe,-20px -20px 48px #ffffff',
                },
                label: {
                  position: 'relative',
                  zIndex: 1,
                },
              }}
              value={name.last.state}
              onChange={(event) => {
                name.last.setState(event.currentTarget.value);
              }}
              label="Last Name"
              w={300}
              m={10}
            />
          </Flex>
          <h1 className="text-[17px] border-b border-gray-500">Address</h1>
          <Flex wrap={'wrap'}>
            <CountriesList country={country} city={city} />
            <TextInput
              value={postal.state}
              onChange={(event) => {
                postal.setState(event.currentTarget.value);
              }}
              styles={{
                input: {
                  border: '.1px solid var(--testColor)',
                  boxShadow: '20px 20px 48px #bebebe,-20px -20px 48px #ffffff',
                },
                label: {
                  position: 'relative',
                  zIndex: 1,
                },
              }}
              label="Postal Code"
              w={300}
              m={10}
            />
          </Flex>
        </div>
      </div>
      <div>
        <Payment value={payment.state} setValue={payment.setState} />
      </div>
    </div>
  );
};

const Billing = ({ name, postal, country, payment, city }: BillingType) => {
  return (
    <div>
      <Flex>
        <TextInput
          label="First Name"
          w={150}
          m={10}
          radius={0}
          styles={{
            input: {
              padding: 0,
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid white ',
              cursor: 'default',
            },
            label: {
              position: 'relative',
              zIndex: 1,
            },
          }}
          value={name?.first}
          disabled
        />
        <TextInput
          label="Last Name"
          styles={{
            input: {
              padding: 0,
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid white ',
              cursor: 'default',
            },
            label: {
              position: 'relative',
              zIndex: 1,
            },
          }}
          value={name?.last}
          radius={0}
          w={150}
          m={10}
          disabled
        />
      </Flex>
      <Flex wrap={'wrap'}>
        <TextInput
          label="Country"
          styles={{
            input: {
              padding: 0,
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid white ',
              cursor: 'default',
            },
            label: {
              position: 'relative',
              zIndex: 1,
            },
          }}
          value={country}
          radius={0}
          w={150}
          m={10}
          disabled
        />
        <TextInput
          label="City"
          styles={{
            input: {
              padding: 0,
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid white ',
              cursor: 'default',
            },
            label: {
              position: 'relative',
              zIndex: 1,
            },
          }}
          value={city}
          radius={0}
          w={150}
          m={10}
          disabled
        />
        <TextInput
          label="Postal Code"
          styles={{
            input: {
              padding: 0,
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid white ',
              cursor: 'default',
            },
            label: {
              position: 'relative',
              zIndex: 1,
            },
          }}
          value={postal}
          radius={0}
          w={300}
          m={10}
          disabled
        />
      </Flex>
      <Flex>
        <TextInput
          label="Payment"
          styles={{
            input: {
              padding: 0,
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid white ',
              cursor: 'default',
            },
            label: {
              position: 'relative',
              zIndex: 1,
            },
          }}
          value={payment}
          radius={0}
          w={300}
          m={10}
          disabled
        />
      </Flex>
    </div>
  );
};

const Checkout = () => {
  const user = useSelector(selectAuthState);
  const router = useRouter();
  const { cart, isLoading } = useCustomerCart(user?.data.user?.id);
  const { updateOrder } = useOrders({
    cartId: cart?.id,
    customerId: user?.data.user?.id,
  });
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [postal, setPostal] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [city, setCity] = useState<string>();
  const [payment, setPayment] = useState<string>();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="w-full h-full flex justify-center p-5">
      {!cart || isLoading ? (
        <Flex w={'100%'} h={'100%'}>
          <SkeletonContainer repeat={1} w={600} h={600} mr={50} />
          <SkeletonContainer repeat={1} w={400} h={600} ml={50} />
        </Flex>
      ) : (
        <>
          <div className="flex w-full">
            <div className="payment-details w-[50%] p-5">
              <div>
                <h1 className="text-[25px] border-b-[0.8px] border-gray-800">
                  Checkout
                </h1>
              </div>
              <CheckoutInformation
                name={{
                  first: {
                    state: firstName,
                    setState: setFirstName,
                  },
                  last: {
                    state: lastName,
                    setState: setLastName,
                  },
                }}
                postal={{ state: postal, setState: setPostal }}
                country={{ state: country, setState: setCountry }}
                city={{ state: city, setState: setCity }}
                payment={{ state: payment, setState: setPayment }}
              />
            </div>
            <div className="w-[30%] p-5 text-white">
              <div className="bg-[var(--testColor)]">
                <div className="px-5 pt-1">
                  <h1 className="text-white">Invoice</h1>
                  <Billing
                    name={{
                      first: firstName,
                      last: lastName,
                    }}
                    postal={postal}
                    country={country}
                    payment={payment}
                    city={city}
                  />
                </div>
                <div
                  className="checkout  sticky top-[var(--nav-height)] h-fit p-5"
                  data-cy="test-checkout"
                >
                  <div className="w-full">
                    <div className="w-full flex justify-between items-end">
                      <p className=" text-[18px] my-0 flex items-center uppercase">
                        Total Items
                        <p
                          className={'ml-1 text-white'}
                          data-cy="test-selected-items"
                        >
                          ({cart?.products?.length})
                        </p>
                      </p>
                      <p
                        className="text-xs cursor-pointer underline"
                        onClick={open}
                      >
                        Check out list
                      </p>
                    </div>
                    <div className="flex">
                      <p>Total:</p>
                      <p className="ml-1" data-cy="test-total">
                        ${cart?.total}
                      </p>
                    </div>
                    <Button
                      w={'100%'}
                      variant="white"
                      color={'var(--testColor)'}
                      onClick={async () => {
                        const d = updateOrder(cart.id, user?.data.user?.id);
                        console.log(await d);
                      }}
                    >
                      Pay
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Modal opened={opened} onClose={close} size={'80%'}>
              <CartTable cart={cart} />
              <Flex justify={'end'} mt={5}>
                <Link href="/cart">
                  <Button className="" color="var(--testColor)">
                    Update List
                  </Button>
                </Link>
              </Flex>
            </Modal>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
