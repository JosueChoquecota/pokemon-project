import Image from "next/image";

export default function ProductCard({pokemon} : {pokemon: any}){
    return (
        <div className="border p-4 rounded shadow flex flex-col items-center justify-center min-h-[200px] text-center hover:shadow-md transition">
            <Image
               src={pokemon.image || "/placeholder.png"} // imagen por defecto
               alt={pokemon.name}
               width={150}
               height={100}
               className="mb-2"

            />
            <h3 className="text-lg font-semibold capitalize">
                {pokemon.name}
            </h3>


        </div>

    )

}