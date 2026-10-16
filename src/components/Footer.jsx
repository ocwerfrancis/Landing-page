import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const BRAND = "The Next Design";

const columns = [
  {
    title: "Company",
    links: ["About", "Terms of Use", "Privacy Policy", "How It Works", "Contact Us"],
  },
  {
    title: "GetHelp",
    links: ["Support Career", "24h Service", "Quick Chat"],
  },
  {
    title: "Support",
    links: ["FAQ", "Policy", "Business"],
  },
  {
    title: "Contact",
    links: ["WhatsApp", "Support 24"],
  },
];

const socials = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaTwitter, label: "Twitter", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 pt-14 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#hero" className="inline-flex items-center gap-2">
              <span className="flex">
                <span className="h-4 w-4 rounded-full bg-primary" />
                <span className="-ml-1.5 h-4 w-4 rounded-full bg-emerald-500" />
              </span>
              <span className="font-semibold text-gray-900">{BRAND}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600">
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition hover:bg-primary hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-semibold text-gray-900">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 transition hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>
            Copyright © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
          <p>Created by Francis</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;