import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <FadeIn>
      <section
        id="contact"
        className="bg-gray-50 py-20"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Header */}
          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
              Contact Us
            </span>

            <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
              Get Your Free Cleaning Quote
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Contact our team today and let us help restore your carpets,
              upholstery and leather surfaces.
            </p>

          </div>


          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3">


            {/* WhatsApp */}
            <a
              href="https://wa.me/61420849402?text=Hi%20I%20would%20like%20a%20free%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-white p-8 shadow-sm border border-gray-100 transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl ">
                <img src="/images/whatsapp-icon.png" alt="" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                WhatsApp
              </h3>

              <p className="mt-2 text-gray-600">
                Chat with us for a quick quote.
              </p>

              <span className="mt-5 block font-semibold text-green-600">
                Send Message →
              </span>

            </a>


            {/* Instagram */}
            <a
              href="https://www.instagram.com/procleanup/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-white p-8 shadow-sm border border-gray-100 transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl">
                <img src="/images/instagram-icon.png" alt="Instagram" />
              </div>


              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Instagram
              </h3>

              <p className="mt-2 text-gray-600">
                See our latest cleaning results.
              </p>

              <span className="mt-5 block font-semibold text-pink-600">
                Follow Us →
              </span>

            </a>


            {/* Facebook */}
            <a
              href="http://www.facebook.com/profile.php?id=61575845459359"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-white p-8 shadow-sm border border-gray-100 transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl">
                <img src="/images/facebook-icon.png" alt="Facebook" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Facebook
              </h3>

              <p className="mt-2 text-gray-600">
                Follow our updates and offers.
              </p>

              <span className="mt-5 block font-semibold text-blue-600">
                Visit Page →
              </span>

            </a>


          </div>


          {/* Info */}
          <div className="mt-10 grid gap-5 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-3">


            <div className="flex items-center gap-4">
              <PhoneIcon className="h-6 w-6 text-sky-500" />

              <div>
                <p className="text-sm text-gray-500">
                  Call Us
                </p>
                <p className="font-semibold">
                  420 849 402
                </p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <EnvelopeIcon className="h-6 w-6 text-sky-500" />

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="font-semibold">
                  info@procleanup.com.au
                </p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <MapPinIcon className="h-6 w-6 text-sky-500" />

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="font-semibold">
                  Perth, WA
                </p>
              </div>
            </div>


          </div>

        </div>

      </section>
    </FadeIn>
  );
}