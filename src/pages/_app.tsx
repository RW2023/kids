import type { AppProps } from 'next/app';
import Layout from '@/app/layout';
import { AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react'; // Import useEffect from React

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    // Register the service worker on mount
    if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'production') {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          // console.log(
          //   'Service Worker registered with scope:',
          //   registration.scope,
          // );
        })
        .catch((error) => {
          console.error('Error during service worker registration:', error);
        });
    }
  }, []);

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
