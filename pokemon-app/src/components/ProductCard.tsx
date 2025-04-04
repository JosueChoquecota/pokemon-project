import Image from "next/image";

export default function ProductCard({pokemon} : {pokemon: any}){
    return (
        <div className="boder p-4 rounded text-center shadow hover:shadow-md transition">
            <Image
                src={pokemon.imagen}
                alt={pokemon.name}
                width={100}
                height={100}
            />
            <h3 className="text-lg font-semibold capitalize">
                {pokemon.name}
            </h3>


        </div>

    )

}