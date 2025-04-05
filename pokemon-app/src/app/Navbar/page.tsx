export default function Navbar() {
    return (
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            <span className="font-bold text-lg">PokeShop</span>
          </div>
  
          {/* Opciones */}
          <nav>
            <ul className="flex space-x-6 font-medium">
              <li className="hover:text-yellow-300 cursor-pointer">Inicio</li>
              <li className="hover:text-cyan-300 cursor-pointer">Agua</li>
              <li className="hover:text-red-300 cursor-pointer">Fuego</li>
              <li className="hover:text-green-300 cursor-pointer">Planta</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  