import Image from "next/image";

export default function ProductCard({ pokemon }: { pokemon: any }) {
 
    function getTypeColor(type: string) {
        const colors: Record<string, string> = {
            fire: "bg-red-200 border-red-400",
            water: "bg-blue-200 border-blue-400",
            grass: "bg-green-200 border-green-400",
            electric: "bg-yellow-200 border-yellow-400",
            bug: "bg-lime-200 border-lime-400",
            normal: "bg-gray-200 border-gray-400",
            poison: "bg-purple-200 border-purple-400",
            psychic: "bg-pink-200 border-pink-400",
            ground: "bg-yellow-300 border-yellow-500",
            default: "bg-zinc-100 border-zinc-300"
          };
          return colors[type] || colors.default;
    }
 
    return (
<div className={`border-4 rounded-xl shadow-lg p-4 w-60 hover:scale-105 transition-transform duration-300 ${getTypeColor(pokemon.type)}`}>
<div className="bg-white rounded-lg p-2 shadow-inner">
      <Image
            src={pokemon.image || "/placeholder.png"}
            alt={pokemon.name}
            width={200}
            height={150}
            className="mx-auto"
            />
      </div>

      <div className="mt-4 text-center">
      <h2 className="text-xl font-bold capitalize text-gray-800 mt-3">{pokemon.name}</h2>
<p className="text-sm italic text-gray-600 capitalize mb-2">Type: {pokemon.type}</p>

      </div>

      <div className="grid grid-cols-3 text-center text-sm text-gray-700 mt-2">
        <div>
            <p className="font-semibold">HP</p>
            <p>{pokemon.hp}</p>
        </div>
        <div>
            <p className="font-semibold">ATK</p>
            <p>{pokemon.attack}</p>
        </div>
        <div>
            <p className="font-semibold">DEF</p>
            <p>{pokemon.defense}</p>
        </div>
        </div>
    </div>
  );
}
