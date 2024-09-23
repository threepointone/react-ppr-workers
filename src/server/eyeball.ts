import { prelude } from '../prerender/data.json';

function assert(condition: unknown, message?: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

type Env = {
  APP: Service;
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const restOfResponse = await env.APP.fetch(request);

    // we want to start a new reponse that first writes the prelude HTML,
    // then streams restOfResponse

    return new Response(
      new ReadableStream({
        async start(controller) {
          try {
            controller.enqueue(new TextEncoder().encode(prelude));
            assert(restOfResponse.body, 'restOfResponse.body is null');
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
        headers: restOfResponse.headers,
      },
    );
  },
} satisfies ExportedHandler<Env>;
