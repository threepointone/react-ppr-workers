export default function Home(props: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center flex-start px-6 pt-6">
        <h1 className="text-3xl font-bold mb-3">How is this not illegal?</h1>
        <p className="text-center">
          This page renders{' '}
          <code className="py-0.5 px-1 text-sm rounded-md border border-gray-300 bg-gray-100 dark:bg-[#444] dark:border-[#666]">
            SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12
          </code>{' '}
          from the edge, for every request.
        </p>
        <p className="mt-2 text-center">
          What&apos;s best, the data fetching is defined directly within the
          component tree thanks.{' '}
          <a
            href="https://twitter.com/dan_abramov/status/1341217154566402050"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            Legally
          </a>
          . (
          <a
            className="underline"
            target="_blank"
            href="https://github.com/threepointone/react-ppr-workers/"
            rel="noreferrer"
          >
            Source
          </a>
          ). (
          <a
            className="underline"
            target="_blank"
            href="https://sunilpai.dev/posts/ppr-for-everyone/"
            rel="noreferrer"
          >
            Blogpost
          </a>
          )
        </p>
        {props.children}
      </main>

      <footer className="text-xs p-5 text-center text-gray-600">
        Images courtesy of{' '}
        <a
          target="_blank"
          className="underline"
          href="https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon"
          rel="noreferrer"
        >
          PokeAPI
        </a>{' '}
        – Pokemon is © 1996-2023 Nintendo, Creatures, Inc., GAME FREAK
        <br />
        <a
          href="https://github.com/rauchg/how-is-this-not-illegal"
          target="_blank"
          className="underline"
          rel="noreferrer"
        >
          Based on this repo by @rauchg
        </a>
        <br />
        Forked by me,{' '}
        <a
          href="https://twitter.com/threepointone/"
          target="_blank"
          className="underline"
          rel="noreferrer"
        >
          Sunil Pai
        </a>
      </footer>
    </>
  );
}
