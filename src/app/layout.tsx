export const metadata = {
  title: 'How is this not illegal?',
  description: 'Querying D1 directly from your components',
  openGraph: {
    title: 'How is this not illegal?',
    description: 'Querying D1 directly from your components',
    url: 'https://react-ppr-workers.threepointone.workers.dev/',
    siteName: 'How is this not illegal?',
    image: 'https://react-ppr-workers.threepointone.workers.dev/og-image.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@threepointone',
    creator: '@threepointone',
    image: 'https://react-ppr-workers.threepointone.workers.dev/og-image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* todo: add inter font? */}
      <title>{metadata.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metadata.description} />
      <meta name="og:title" content={metadata.openGraph.title} />
      <meta name="og:description" content={metadata.openGraph.description} />
      <meta name="og:url" content={metadata.openGraph.url} />
      <meta name="og:siteName" content={metadata.openGraph.siteName} />
      <meta name="og:image" content={metadata.openGraph.image} />
      <meta name="twitter:card" content={metadata.twitter.card} />
      <meta name="twitter:site" content={metadata.twitter.site} />
      <meta name="twitter:creator" content={metadata.twitter.creator} />
      <meta name="twitter:image" content={metadata.twitter.image} />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/dist/styles.css" />
      <body>
        <div id="root">{children}</div>
      </body>
      <script src="/dist/index.js" type="module" />
    </html>
  );
}
