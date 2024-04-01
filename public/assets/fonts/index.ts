import localFont from 'next/font/local'

 
export const segoeui = localFont({
    src: [
      {
        path: './Segoe-UI.woff',
        weight: '400',
        style: 'normal',
      },
      {
        path: './Segoe-UI-Italic.woff',
        weight: '400',
        style: 'italic',
      },
      {
        path: './Segoe-UI-Bold.woff',
        weight: '700',
        style: 'normal',
      },
      {
        path: './Segoe-UI-Bold-Italic.woff',
        weight: '700',
        style: 'italic',
      },
    ],
    variable: '--font-segoe',

  })



 