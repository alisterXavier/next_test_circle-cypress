/** @type {import('next').NextConfig} */

const urls = [
  'media.boohoo.com',
  'lp2.hm.com',

  'm.media-amazon.com',
  'media.veli.store',
  'www.bhphotovideo.com',
  'static.bhphoto.com',
  'zoommer.ge'
];

const nextConfig = {
  images: {
    remotePatterns: urls.map((i) => {
      return {
        protocol: 'https',
        hostname: i,
        port: '',
      };
    }),
  },
};

export default nextConfig;
