import Head from 'next/head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import Showcase from '@/components/Showcase';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Agentic Launch Kit</title>
        <meta
          name="description"
          content="Opinionated Next.js starter focused on agentic product delivery."
        />
      </Head>
      <Hero />
      <FeatureGrid />
      <Showcase />
      <CTA />
    </Layout>
  );
}
