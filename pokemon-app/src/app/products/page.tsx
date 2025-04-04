'use client';
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

interface Pokemon {
    name: string;
    url: string;
    image: string;
}

export default function ProductsPage() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
useEffect(() => {
    async function fetchPokemons() {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = await res.json();

        const enriched = await Promise.all(
            data.results.map(async(poke: any) => {
                const details = await fetch(poke.url).then(res => res.json());
                return {
                    name: poke.name,
                    url: poke.url,
                    image: details.sprites.front_fault,

                }
            })
        )
        setPokemons(enriched);
    }
    fetchPokemons();
}, []);

    return (
        <div className="p-8">
            <h1 className="text-3x1 font-bold mb-6">
                Pokemones en venta 
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {pokemons.map(poke => (
                    <ProductCard key={poke.name} pokemon={poke}/>
                ))}
            </div>
        </div>
    )

}