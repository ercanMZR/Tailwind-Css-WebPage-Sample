import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between bg-slate-400 items-center py-4 px-8">
      {/* Sol kısım: Logo veya başlık */}
      <div className="text-lg font-light tracking-wide">
        Gourmet au Catering
      </div>

      {/* Sağ kısım: Menü linkleri */}
      <div className="flex space-x-8 text-lg font-light">
        <a href="#" class="hover:text-gray-500">About</a>
        <a href="#" class="hover:text-gray-500">Menu</a>
        <a href="#" class="hover:text-gray-500">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar