// pages/_app.js
import type { AppProps } from 'next/app';
import Layout from '@/app/layout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      {/* AnimatePresence with mode="wait" for page transitions */}
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
