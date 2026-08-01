import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { servicesMenu, contactInfo } from "../lib/data";
import StretchRule from "./StretchRule";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top strip */}
      <div className="hidden md:flex items-center justify-between bg-ink text-paper/80 text-sm px-8 py-2">
        <div className="flex items-center gap-6 font-label">
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-gold transition-colors">
            <Phone size={13} /> {contactInfo.phone}
          </a>
          <a href={`https://wa.me/${contactInfo.whatsapp}`} className="flex items-center gap-2 hover:text-gold transition-colors">
            <MessageCircle size={13} /> {contactInfo.whatsapp}
          </a>
        </div>
        <Link
          to="/job-circulation"
          className="font-label text-xs uppercase tracking-[0.15em] border border-paper/25 rounded-full px-4 py-1.5 hover:border-gold hover:text-gold transition-colors"
        >
          Job Circulation
        </Link>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 px-6 md:px-8 backdrop-blur-md ${scrolled
            ? "bg-paper/95 shadow-[0_1px_0_0_rgba(14,19,48,0.08)] py-3"
            : "bg-paper/85 py-5"
          }`}
      >
        <div className="max-w-content mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Stretch-IT Concepts" className="h-8 sm:h-9 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-8 font-label text-[13px] uppercase tracking-[0.12em]">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative pb-1 group ${isActive ? "text-ink" : "text-slate-muted hover:text-ink"} transition-colors`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span className="block mt-1">
                      {isActive ? (
                        <StretchRule width={20} color="gold" />
                      ) : (
                        <span className="block h-[3px] w-0 group-hover:w-5 bg-gold/60 rounded-full transition-all duration-300" />
                      )}
                    </span>
                  </>
                )}
              </NavLink>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1.5 pb-1 text-slate-muted hover:text-ink transition-colors">
                Services
                <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-72"
                  >
                    <div className="bg-ink rounded-2xl shadow-2xl shadow-ink/20 p-2 normal-case tracking-normal">
                      {servicesMenu.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="w-full text-left px-4 py-3 rounded-xl text-paper/85 hover:bg-white/5 hover:text-gold transition-colors flex items-center justify-between group/item font-label text-sm"
                        >
                          {s.name}
                          <span className="text-paper/30 group-hover/item:text-gold group-hover/item:translate-x-0.5 transition-all">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center font-label text-[13px] uppercase tracking-[0.12em] bg-indigo text-paper px-5 py-2.5 rounded-full hover:bg-indigo-deep transition-colors"
          >
            Contact Us
          </Link>

          <button className="lg:hidden text-ink" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <div className="bg-paper rounded-xl px-3 py-2">
                <img src={logo} alt="Stretch-IT Concepts" className="h-7 w-auto" />
              </div>
              <button onClick={() => setMobileOpen(false)} className="text-paper" aria-label="Close menu">
                <X size={26} />
              </button>
            </div>
            <div className="flex flex-col gap-1 px-6 mt-6 font-label text-2xl">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-paper/90 border-b border-paper/10"
                >
                  {l.label}
                </Link>
              ))}
              <div className="py-3 text-paper/90 border-b border-paper/10">
                <span className="block mb-3">Services</span>
                <div className="flex flex-col gap-2 pl-2">
                  {servicesMenu.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="text-base text-paper/60 font-body hover:text-gold transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="py-3 text-gold"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
