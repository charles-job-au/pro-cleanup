import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Pro Cleanup
            </h2>

            <div className="mt-4 h-1 w-20 rounded-full bg-sky-500"></div>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              Professional carpet, upholstery and leather cleaning services
              across Perth. We help homes and businesses stay cleaner,
              healthier and looking their best.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a className="transition hover:text-sky-400" href="#services">
                  Carpet Cleaning
                </a>
              </li>

              <li>
                <a className="transition hover:text-sky-400" href="#services">
                  Upholstery Cleaning
                </a>
              </li>

              <li>
                <a className="transition hover:text-sky-400" href="#services">
                  Mattress Cleaning
                </a>
              </li>

              <li>
                <a className="transition hover:text-sky-400" href="#services">
                  Leather Cleaning
                </a>
              </li>

              <li>
                <a className="transition hover:text-sky-400" href="#services">
                  Car Seat Cleaning
                </a>
              </li>

              <li>
                <a className="transition hover:text-sky-400" href="#services">
                  Commercial Cleaning
                </a>
              </li>

              <li>
                <a className="transition hover:text-sky-400" href="#services">
                  More Services
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-1 h-5 w-5 text-sky-400" />
                <span>420 849 402</span>
              </div>

              
              <a className="flex items-start gap-3 hover:text-sky-400 transition" href="mailto:info@procleanup.com.au">
                <EnvelopeIcon className="mt-1 h-5 w-5 text-sky-400" />
                <span>info@procleanup.com.au</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-1 h-5 w-5 text-sky-400" />
                <span>Perth, WA</span>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Pro Cleanup. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-sky-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-sky-400">
              Terms of Service
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}