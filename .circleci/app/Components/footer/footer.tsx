import { Button, TextInput, Text } from '@mantine/core';
import Image from 'next/image';
import logo from '@/public/images/Logo.jpg';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from '@tabler/icons-react';
import Link from 'next/link';

export const FooterSection = ({ enableDark }: { enableDark: boolean }) => (
  <footer
    className={`px-10 mt-14 w-[100vw] h-[50vh] ${
      enableDark && 'bg-[var(--testColor)]'
    }`}
  >
    <div className="flex h-[90%]">
      <div className="left-section flex flex-col items-start justify-center w-[60%]">
        <div className="w-full">
          <h1 className={`uppercase text-[15px] ${enableDark && 'text-white'}`}>
            Get exclusive offers and updates
          </h1>
          <div className="flex w-full">
            <TextInput
              variant="unstyled"
              className={`login-input-field`}
              style={{
                borderBottom: `1px solid ${enableDark ? 'white' : 'black'}`,
              }}
              styles={{
                input: {
                  border: 'none',
                  color: enableDark ? 'white' : 'black',
                },
              }}
              w={400}
              radius={0}
              placeholder="ENTER YOUR EMAIL"
            />
            <Button
              style={{
                background: enableDark ? 'white' : 'black',
                color: enableDark ? 'black' : 'white',
              }}
              radius={0}
            >
              Submit
            </Button>
          </div>
        </div>
        <div className={`flex w-full ${enableDark && 'text-[#e2ebf1]'}`}>
          <div className={`w-[45%] !my-5`}>
            <Text className="!text-[20px]">Customer Service</Text>
            <ul>
              <li>
                <Link
                  className={`${
                    enableDark && 'text-[#e2ebf1]'
                  } text-[14px] hover:underline`}
                  href="/faqs"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    enableDark && 'text-[#e2ebf1]'
                  } text-[14px] hover:underline`}
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    enableDark && 'text-[#e2ebf1]'
                  } text-[14px] hover:underline`}
                  href="/return-policy"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    enableDark && 'text-[#e2ebf1]'
                  } text-[14px] hover:underline`}
                  href="/discounted"
                >
                  Discounted Promo Codes
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[45%] !my-5">
            <Text className="!text-[20px]">About Us</Text>
            <ul>
              <li>
                <Link
                  className={`${
                    enableDark && 'text-[#e2ebf1]'
                  } text-[14px] hover:underline`}
                  href="/about-us"
                >
                  PAO
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    enableDark && 'text-[#e2ebf1]'
                  } text-[14px] hover:underline`}
                  href="/careers"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    enableDark && 'text-[#e2ebf1]'
                  } text-[14px] hover:underline`}
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    enableDark && 'text-[#e2ebf1]'
                  } text-[14px] hover:underline`}
                  href="/terms-and-conditions"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right-section flex flex-col items-start justify-end w-[40%]">
        <div className="social-medias flex">
          <IconBrandInstagram size={30} color="var(--testColor)" />
          <IconBrandFacebook size={30} color="var(--testColor)" />
          <IconBrandTwitter size={30} color="var(--testColor)" />
        </div>
        <figure className="relative w-[300px] h-[200px]">
          <Image
            alt="logo"
            src={logo}
            fill
            quality={100}
            style={{
              objectFit: 'contain',
            }}
            className="mix-blend-multiply"
          />
        </figure>
      </div>
    </div>
    <div className="h-[10%]">
      <Text className={`uppercase !text-xs ${enableDark && '!text-white'}`}>
        copyrights©2024 all rights reserved see our{' '}
        <Link
          className={`${enableDark && 'text-[#e2ebf1]'} hover:underline`}
          href="terms-of-use"
        >
          terms of use
        </Link>
      </Text>
    </div>
  </footer>
);
