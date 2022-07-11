import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='es'>
      <Head />
      <body className='p-0 m-0 text-3xl leading-relaxed font-next'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}