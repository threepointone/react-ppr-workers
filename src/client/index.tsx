import { Suspense } from 'react';
import { hydrateRoot } from 'react-dom/client';
import Home from '../app/home';
import List from '../app/list';
import Loading from '../app/loading';

function App({ DB }: { DB?: D1Database }) {
  return (
    <Suspense fallback={<Loading />}>
      <Home>
        <List DB={DB} />
      </Home>
    </Suspense>
  );
}

hydrateRoot(document.getElementById('root')!, <App />);
