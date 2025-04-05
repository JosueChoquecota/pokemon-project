'use client';
import { Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';

interface Pokemon {
  name: string;
  image: string;
  type: string;
  hp: number;
  attack: number;
  defense: number;
  abilities: string[];
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pokemon: Pokemon;
}

const typeEmojis: Record<string, string> = {
  fire: "🔥",
  water: "💧",
  grass: "🌿",
  electric: "⚡",
  poison: "☠️",
  bug: "🐛",
  normal: "⭐",
  psychic: "🧠",
  ghost: "👻",
  rock: "🪨",
  ground: "🌍",
  fighting: "🥊",
  fairy: "✨",
  flying: "🕊️",
  ice: "❄️",
  dragon: "🐉",
  default: "❔"
};

export default function PokemonModal({ isOpen, onClose, pokemon }: Props) {
  const emoji = typeEmojis[pokemon.type] || typeEmojis.default;

  return (
    <Dialog open={isOpen} onClose={onClose} as={Fragment}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md" aria-hidden="true" />

        <Dialog.Panel className="relative z-50 bg-gradient-to-br from-white to-gray-100 rounded-3xl p-8 w-[70%] max-w-xl shadow-2xl border border-gray-300">
          <Dialog.Title className="text-4xl font-extrabold text-center mb-6 capitalize text-gray-800 drop-shadow">
            {pokemon.name}
          </Dialog.Title>

          <div className="flex flex-col items-center gap-3">
            <div className="bg-white border rounded-full p-4 shadow-inner">
            <Image
                src={pokemon.image}
                alt={pokemon.name}
                width={160}
                height={160}
                className="w-40 h-40 object-contain"
                />

            </div>

            <div className="mt-4 text-center">
              <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-green-200 text-green-800`}>
                {emoji} {pokemon.type.toUpperCase()}
              </span>
            </div>

            <div className="mt-6 w-full space-y-4">
            {[
                { label: "HP", value: pokemon.hp, color: "bg-red-400" },
                { label: "ATK", value: pokemon.attack, color: "bg-yellow-500" },
                { label: "DEF", value: pokemon.defense, color: "bg-blue-400" },
            ].map((stat) => (
                <div key={stat.label}>
                <div className="flex justify-between mb-1 text-sm font-semibold text-gray-600">
                    <span>{stat.label}</span>
                    <span>{stat.value}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                    className={`h-3 rounded-full ${stat.color}`}
                    style={{ width: `${Math.min(stat.value, 100)}%` }}
                    />
                </div>
                </div>
            ))}
            </div>
            {/* Habilidades */}
            <div className="mt-3 text-center">
            <p className="text-sm text-gray-500 font-semibold mb-1">Habilidades</p>
            <ul className="flex flex-wrap justify-center gap-2 text-sm">
                {pokemon.abilities.map((ability: string) => (
                <li key={ability} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full capitalize">
                    {ability.replace("-", " ")}
                </li>
                ))}
            </ul>
            </div>



            <button
              onClick={onClose}
              className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-blue-600 text-white px-6 py-2 rounded-xl shadow transition duration-300"
            >
              Cerrar
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
