import { Suspense } from 'react';
import Home from './home';
import Layout from './layout';
import List from './list';
import Loading from './loading';

export default function App({ DB }: { DB?: D1Database }) {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Home>
          <List DB={DB} />
        </Home>
      </Suspense>
    </Layout>
  );
}
