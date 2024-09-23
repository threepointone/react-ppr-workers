# Partial Prerendering with React and Cloudflare Workers

This is a demo of a React app that implements partial prerendering with React and Cloudflare Workers. It's meant to accompany [this blog post](https://sunilpai-dev.pages.dev/posts/ppr-for-everyone/). Live demo at [https://react-ppr-workers.threepointone.workers.dev/](https://react-ppr-workers.threepointone.workers.dev/)

### Here's the timeline of what happens when you visit the site:

- A response stream is started from the eyeball worker
- It immediately streams a prerendered html app "shell"
- The request is passed on to the a smart placed worker near the database
- React kicks in and starts rendering
- The app renders and generates html / script tags with out-of-order streaming
- This is streamed back to the user through the eyeball

## Setup

- `npm install`
- Setup a "pokemon" database on [Cloudflare D1](https://developers.cloudflare.com/d1/get-started/) with [`init.sql`](./init.sql)
- `npm start` to run the dev server
- `npm run deploy` to deploy to Cloudflare Workers

### Credit

Original repo by [@rauchg](https://github.com/rauchg/how-is-this-not-illegal)
