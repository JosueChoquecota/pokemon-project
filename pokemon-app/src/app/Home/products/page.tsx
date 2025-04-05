"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import PokemonModal from "../PokemonModal/page";
import Navbar from "../Navbar/page";
// 🧩 INTERFACES
interface Pokemon {
  name: string;
  url: string;
  image: string;
  type: string;
  hp: number;
  attack: number;
  defense: number;
  abilities: string[];
}

// 🧠 COMPONENTE PRINCIPAL
export default function ProductsPage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🔎 FILTRO POR TIPO
  const filteredPokemons = filterType
    ? pokemons.filter(poke => poke.type === filterType)
    : pokemons;

  // 🕸️ FETCH POKEMONES
  useEffect(() => {
    async function fetchPokemons() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=80");
      const data = await res.json();

      const enriched = await Promise.all(
        data.results.map(async (poke: any) => {
          const details = await fetch(poke.url).then(res => res.json());

          return {
            name: poke.name,
            url: poke.url,
            image: details.sprites.front_default || "/placeholder.png",
            type: details.types[0]?.type.name || "normal",
            hp: details.stats[0]?.base_stat,
            attack: details.stats[1]?.base_stat,
            defense: details.stats[2]?.base_stat,
            abilities: details.abilities.map((a: any) => a.ability.name),
          };
        })
      );

      setPokemons(enriched);
    }

    fetchPokemons();
  }, []);

  // 🖼️ RENDER
  return (
    <>
      <Navbar setFilterType={setFilterType} /> 

      <div className="px-4 py-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-black mb-10 tracking-wide">
          🛒 Pokemones en venta
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {filteredPokemons.map(poke => (
            <div
              key={poke.name}
              onClick={() => {
                setSelectedPokemon(poke);
                setIsModalOpen(true);
              }}
            >
              <ProductCard pokemon={poke} />
            </div>
          ))}
        </div>

        {selectedPokemon && (
          <PokemonModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            pokemon={selectedPokemon}
          />
        )}
      </div>
    </>
  );
}
