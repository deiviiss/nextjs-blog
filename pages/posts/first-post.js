import Link from 'next/link';
import Head from 'next/head';
// import Script from 'next/script'
import PostLayout from '../../layout/PostsLayout';

export default function FirstPost() {
  return (
    <>
      <PostLayout>
        <Head>
          <title>Primer post</title>
          {/* <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        /> */}
        </Head>
        <div className="">
          <h1 className=''>Este es el primer post</h1>
        </div>
        <h2>
          <Link href="/">
            <a>Volver a inicio</a>
          </Link>
        </h2>
      </PostLayout>

    </>
  );
}