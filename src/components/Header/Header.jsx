import React, { useState } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react"; // Íconos de menú

const menuButtonClass =
  "text-lg font-medium text-white hover:text-orange-300 cursor-pointer";
const authButtonClass =
  "bg-black hover:bg-yellow-600 text-white hover:text-black font-bold py-3 px-3 rounded cursor-pointer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-8 px-6 md:px-20 bg-blue-500">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-4xl font-bold text-white">My Logo</h2>

        {/* Hamburguer Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Nav Menu (oculto en móviles y visible en desktop) */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-blue-500 md:bg-transparent flex flex-col md:flex-row items-center md:space-x-8 p-6 md:p-0 transition-all ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <Button className={menuButtonClass}>Home</Button>
          <Button className={menuButtonClass}>Services</Button>
          <Button className={menuButtonClass}>About Us</Button>
          <Button className={menuButtonClass}>Contact</Button>
        </nav>

        {/* Botones de autenticación */}
        <div
          className={`absolute md:static top-48 left-0 w-full md:w-auto bg-blue-500 md:bg-transparent flex flex-col md:flex-row items-center md:space-x-8 p-6 md:p-0 transition-all ${
            isOpen ? "block gap-5" : "hidden md:flex"
          }`}
        >
          <Button className={authButtonClass}>Login</Button>
          <Button className={authButtonClass}>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
