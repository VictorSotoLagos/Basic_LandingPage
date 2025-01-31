import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-600 text-white py-10">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo y descripción */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-bold">My Logo</h2>
            <p className="mt-2 text-gray-200">
              Company Subtitle Or Mision/Vision.
            </p>
          </div>

          {/* Enlaces de navegación */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <a
              href="#inicio"
              className="text-lg font-medium hover:text-orange-300"
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="text-lg font-medium hover:text-orange-300"
            >
              Nosotros
            </a>
            <a
              href="#proyectos"
              className="text-lg font-medium hover:text-orange-300"
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className="text-lg font-medium hover:text-orange-300"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="mt-6 md:mt-10 text-center md:text-left">
          <p className="text-gray-200">Email: contact@mylogo.com</p>
          <p className="text-gray-200">Tel: +56 9 8000 0000</p>
        </div>

        {/* Derechos reservados */}
        <div className="mt-6 md:mt-10 text-center">
          <p className="text-gray-200">
            &copy; 2023 My Logo. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
