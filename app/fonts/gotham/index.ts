import localFont from 'next/font/local';

const gotham = localFont({
  src: [
    {
      path: './Gotham-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Gotham-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Gotham-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Gotham-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Gotham-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ]
});

export default gotham;