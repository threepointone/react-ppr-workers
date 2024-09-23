// import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'How is this not illegal?',
  description: 'Querying Postgres directly from your components',
  openGraph: {
    title: 'How is this not illegal?',
    description: 'Querying Postgres directly from your components',
    url: 'https://howisthisnotillegal.vercel.app',
    siteName: 'How is this not illegal?',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rauchg',
    creator: '@rauchg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* todo: add inter font */}
      <link rel="stylesheet" href="/dist/styles.css" />
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
