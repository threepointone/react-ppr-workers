import { Suspense } from 'react';
import Home from './home';
import Layout from './layout';
import List from './list';
import Loading from './loading';

export default function App({ DB }: { DB?: D1Database }) {
  return (
    <Layout>
      <Home>
        <Suspense fallback={<Loading />}>
          <List DB={DB} />
        </Suspense>
      </Home>
    </Layout>
  );
}
