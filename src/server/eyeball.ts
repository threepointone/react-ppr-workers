import { prelude } from '../prerender/data.json';

type Env = {
  APP: Service;
};

const headers = {
  'Content-Type': 'text/html; charset=utf-8',
  'Transfer-Encoding': 'chunked',
  // set caching header so it never caches
  'Cache-Control':
    'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    // we want to start a new reponse that first writes the prelude HTML,
    // then streams restOfResponse

    return new Response(
      new ReadableStream({
        async start(controller) {
          try {
            controller.enqueue(new TextEncoder().encode(prelude));
            const restOfResponse = await env.APP.fetch(request);
            // @ts-expect-error no types / TODO: is there a way to do this without the expect error?
            for await (const chunk of restOfResponse.body) {
              controller.enqueue(chunk);
            }
          } catch (error) {
            console.error(error);
          } finally {
            controller.close();
          }
        },
      }),
      {
        headers: [
          ...Object.entries(headers),
          ['Link', '</dist/styles.css>; rel=preload; as=style'],
          ['Link', '</dist/index.js>; rel=preload; as=script; crossorigin'],
        ],
      },
    );
  },
} satisfies ExportedHandler<Env>;
