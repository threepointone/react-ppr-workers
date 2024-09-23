// @ts-expect-error no types for this yet
import { unstable_postpone } from 'react';
import { suspend } from 'suspend-react';
import { Pokemon, PokemonList } from './components';

declare const IS_PRERENDER: boolean | undefined;

export default function List({ DB }: { DB: D1Database }) {
  // eslint-disable-next-line unicorn/no-typeof-undefined
  if (typeof IS_PRERENDER !== 'undefined' && IS_PRERENDER) {
    // TODO: trigger this automatically if any i/o is made
    unstable_postpone();
  }

  const results = suspend(async () => {
    if (typeof window !== 'undefined') {
      // @ts-expect-error we've inlined the data in the component
      return window.__data;
    }

    const { results } = await DB.prepare(
      'SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12',
    ).all();

    const result = {
      rows: results,
    };

    return result;
  }, ['pokemon' + new Date().getSeconds() * 4]) as {
    rows: {
      id: number;
      name: string;
    }[];
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.__data = ${JSON.stringify(results.rows)};
        `,
        }}
      />
      <PokemonList>
        {results.rows.map((p) => (
          <Pokemon key={p.id} id={p.id} name={p.name} />
        ))}
      </PokemonList>
    </>
  );
}
