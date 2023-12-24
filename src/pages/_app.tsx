// pages/_app.js
import type { AppProps } from 'next/app';
import Layout from '@/app/layout';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      {/* AnimatePresence with mode="wait" for page transitions */}
      <AnimatePresence mode="wait">
        {/* Ensure key is present for proper page transitions */}
        <motion.div key={router.route}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
