import { useRouter } from 'next/navigation';

interface NavbarProps {
  setFilterType: (type: string | null) => void;
}

export default function Navbar({ setFilterType }: NavbarProps) {

  const router = useRouter(); // 🚀 para redireccionar

  return (
<header className="bg-blue-600 text-white shadow-md z-50 relative">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/pokeball.svg" className="w-8 h-8" alt="Logo" />
          <span className="font-bold text-lg">PokeShop</span>
        </div>

        <nav className="flex gap-4">
          <button onClick={() => setFilterType(null)}>Inicio</button>
          <button onClick={() => setFilterType("water")}>Agua</button>
          <button onClick={() => setFilterType("fire")}>Fuego</button>
          <button onClick={() => setFilterType("grass")}>Planta</button>

           
          <button
            onClick={() => router.push('/login')}
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 transition"
          >
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}
