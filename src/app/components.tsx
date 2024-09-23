type PokemonListProps = {
  children: React.ReactNode;
};

export function PokemonList({ children }: PokemonListProps) {
  return (
    <ul className="max-w-md flex flex-wrap justify-center gap-4 p-4 m-3">
      {children}
    </ul>
  );
}

type PokemonProps = {
  id: number;
  name: string;
};

export function Pokemon({ id, name }: PokemonProps) {
  return (
    <li className="flex flex-col items-center justify-center border bg-white border-gray-400 dark:bg-gray-700 dark:border-gray-500 p-3">
      <img
        width={96}
        height={96}
        alt={name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      {name}
    </li>
  );
}
