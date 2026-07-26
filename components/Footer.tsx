export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 id=1"> 
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* Logo / Marca */}
          <div>
            <h2 className="text-xl font-bold text-white">
              Pro Cleanup
            </h2>
            <p className="mt-4 text-sm leading-6">
              Professional carpet cleaning services with reliable,
              high-quality results for homes and businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-white">
              Services
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Carpet Cleaning
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Upholstery Cleaning
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Stain Removal
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Commercial Cleaning
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-white">
              Contact
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                📞 (000) 000-0000
              </li>

              <li>
                ✉ contact@procleanup.com
              </li>

              <li>
                📍 Your City, Your State
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Pro Cleanup. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}