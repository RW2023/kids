import Document, { Html, Head, Main, NextScript } from 'next/document';
import getBaseUrl from '@/utils/getBaseUrl'; // Assuming getBaseUrl is the function name

class MyDocument extends Document {
  render() {
    const baseUrl = getBaseUrl(); // Call the function to get the base URL
    const ogImageUrl = `${baseUrl}/path/to/your/og-image.jpg`; // Construct the full OG image URL

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Chore Tracker chores management app for kids"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:image" content={ogImageUrl} />{' '}
          {/* Use the full URL */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
