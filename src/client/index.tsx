import { Suspense } from 'react';
import { hydrateRoot } from 'react-dom/client';
import Home from '../app/home';
import List from '../app/list';
import Loading from '../app/loading';

function App({ DB }: { DB?: D1Database }) {
  return (
    <Home>
      <Suspense fallback={<Loading />}>
        <List DB={DB} />
      </Suspense>
    </Home>
  );
}

hydrateRoot(document.getElementById('root')!, <App />);
