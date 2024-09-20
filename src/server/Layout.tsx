export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          content="A React application running on Cloudflare Workers"
          name="description"
        />
        <meta
          content="React, Cloudflare Workers, Web Development"
          name="keywords"
        />
        <meta content="Sunil Pai" name="author" />
        <title>React Workers</title>
        <link href="/favicon.ico" rel="icon" />
        <link href="/dist/styles.css" rel="stylesheet" />
      </head>
      <body className="prose lg:prose-xl">
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
