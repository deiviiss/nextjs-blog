import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/Date';
import PostLayout, { siteTitle } from '../layout/PostsLayout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../utils/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <PostLayout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Web developer Back-end | Living in the world of programming | Technology lover</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <Link href="/posts/first-post">
            <a >our Next.js tutorial</a>
          </Link>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </PostLayout>
  );
}