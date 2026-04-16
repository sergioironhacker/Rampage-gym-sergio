import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-2">
            <img src="/logorg.png" alt="RampageGym" className="h-12 md:h-16 mb-4" />
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
              No es solo ropa. Es mentalidad. Diseñado para los que no se rindeen.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 tracking-wide">NAVEGACIÓN</h3>
            <ul className="space-y-3">
              {[
                { name: 'Tienda', path: '/shop' },
                { name: 'Hombre', path: '/men' },
                { name: 'Mujer', path: '/women' },
                { name: 'Nosotros', path: '/about' },
                { name: 'Contacto', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 tracking-wide">SÍGUENOS</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/rampagegym_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-white" />
              </a>
             {/*  <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-white" />
              </a> */}
            {/*   <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-white" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 RampageGym. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
