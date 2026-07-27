import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Services", href: "#services", current: false },
  { name: "Commercial", href: "#commercial", current: false },
  { name: "About", href: "#about", current: false },
  { name: "Reviews", href: "#reviews", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E7E5E4]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <img
            src="/images/logo.png"
            alt="Pro Cleanup"
            className="h-20 w-auto"
          />

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-2">

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-[#5D8A78] font-semibold"
                    : "text-[#2F2F2F] hover:text-[#5D8A78] hover:bg-[#F8F6F2]",

                  "rounded-lg px-4 py-2 text-sm transition-all duration-300"
                )}
              >
                {item.name}
              </a>
            ))}

          </div>

          {/* CTA */}

          <div className="hidden md:block">

            <button
              className="
              rounded-full
              bg-[#5D8A78]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#4B7263]
              hover:-translate-y-0.5
              hover:shadow-lg
              "
            >
              Book Online
            </button>

          </div>

          {/* Mobile */}

          <DisclosureButton
            className="
            md:hidden
            rounded-lg
            p-2
            text-[#2F2F2F]
            hover:bg-[#F8F6F2]
            hover:text-[#5D8A78]
            transition
            "
          >
            <Bars3Icon className="block h-7 w-7 group-data-open:hidden" />
            <XMarkIcon className="hidden h-7 w-7 group-data-open:block" />
          </DisclosureButton>

        </div>
      </div>

      {/* Mobile Menu */}

      <DisclosurePanel className="md:hidden bg-white border-t border-[#E7E5E4]">

        <div className="space-y-2 px-5 py-5">

          {navigation.map((item) => (

            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-[#5D8A78] text-white"
                  : "text-[#2F2F2F] hover:bg-[#F8F6F2] hover:text-[#5D8A78]",

                "block rounded-lg px-4 py-3 text-base transition-all duration-300"
              )}
            >
              {item.name}
            </DisclosureButton>

          ))}

          <button
            className="
            mt-4
            w-full
            rounded-full
            bg-[#5D8A78]
            py-3
            font-semibold
            text-white
            hover:bg-[#4B7263]
            transition-all
            duration-300
            "
          >
            Book Online
          </button>

        </div>

      </DisclosurePanel>
    </Disclosure>
  );
}