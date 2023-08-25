import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Test() {
  return (
    <Layout>
      <Head> 
        <title className="p-24">
          First Post
        </title></Head>
      <h2 className="text-center">
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}