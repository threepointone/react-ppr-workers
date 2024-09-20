import cookie from 'cookie';
import { nanoid } from 'nanoid';
import { getServerByName, Server } from 'partyserver';
import { renderToReadableStream } from 'react-dom/server';
import App from '../app';
import Layout from './Layout';

type Env = {
  ReactServer: DurableObjectNamespace<ReactServer>;
};

export class ReactServer extends Server<Env> {
  async onRequest(request: Request): Promise<Response> {
    const stream = await renderToReadableStream(
      <Layout>
        <App />
      </Layout>,
      {
        bootstrapModules: ['/dist/index.js'],
      },
    );
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/html',
        // the sessionId is the name of the Durable Object
        'Set-Cookie': `sessionId=${this.name}; Path=/; HttpOnly; Secure; SameSite=Strict`,
        'Transfer-Encoding': 'chunked',
      },
    });
  }
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    let { sessionId } = cookie.parse(request.headers.get('cookie') || '');

    if (!sessionId) {
      sessionId = nanoid(8);
    }

    const stub = await getServerByName(env.ReactServer, sessionId);

    return stub.fetch(request);
  },
} satisfies ExportedHandler<Env>;
