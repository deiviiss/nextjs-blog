import Layout from '../../layout/PostsLayout';
import Head from 'next/head';
import Date from '../../components/Date';
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../utils/posts';

// Fetch necessary data for the blog post using params.id
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// Return a list of possible value for id
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// component render
export default function Post({ postData }) {
  return <Layout>

    <Head>
      <title>{postData.title}</title>
    </Head>



    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>

  </Layout>;
}