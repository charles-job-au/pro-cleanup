import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl shadow-sm"
    >

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a href="#home">
            <img
              src="/images/transparent-logo.png"
              alt="Pro Cleanup"
              className="h-30 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-1 md:flex">

            {navigation.map((item) => (

              <a
                key={item.name}
                href={item.href}
                className="
                group
                relative
                rounded-lg
                px-4
                py-2
                text-sm
                font-medium
                text-gray-700
                transition
                hover:text-sky-600
                "
              >

                {item.name}

                <span
                  className="
                  absolute
                  bottom-0
                  left-1/2
                  h-0.5
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-sky-500
                  transition-all
                  duration-300
                  group-hover:w-1/2
                  "
                />

              </a>

            ))}

          </div>


          {/* CTA */}
          <div className="hidden md:block">

            <a
              href="#contact"
              className="
              inline-flex
              rounded-full
              bg-sky-500
              px-7
              py-3
              text-sm
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-sky-600
              hover:shadow-xl
              "
            >
              Get a Free Quote
            </a>

          </div>


          {/* Mobile Button */}
          <DisclosureButton
            className="
            rounded-xl
            p-2
            text-gray-700
            transition
            hover:bg-gray-100
            md:hidden
            "
          >
            <Bars3Icon className="block h-7 w-7 group-data-open:hidden" />
            <XMarkIcon className="hidden h-7 w-7 group-data-open:block" />
          </DisclosureButton>

        </div>

      </div>


      {/* Mobile Menu */}
      <DisclosurePanel className="border-t border-gray-100 bg-white md:hidden">

        <div className="space-y-2 px-6 py-6">

          {navigation.map((item) => (

            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="
              block
              rounded-xl
              px-4
              py-3
              font-medium
              text-gray-700
              transition
              hover:bg-sky-50
              hover:text-sky-600
              "
            >
              {item.name}
            </DisclosureButton>

          ))}


          <DisclosureButton
            as="a"
            href="#contact"
            className="
            mt-4
            block
            rounded-full
            bg-sky-500
            py-3
            text-center
            font-semibold
            text-white
            transition
            hover:bg-sky-600
            "
          >
            Get a Free Quote
          </DisclosureButton>

        </div>

      </DisclosurePanel>

    </Disclosure>
  );
}