import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { contactInfo } from "../lib/data";
import logo from "../assets/logo.png";

const socialLinkClass =
  "w-9 h-9 rounded-full border border-paper/15 flex items-center justify-center text-paper/70 hover:bg-gold hover:border-gold hover:text-ink transition-colors duration-200";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-content mx-auto px-6 md:px-8 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="bg-paper rounded-xl px-3 py-2.5 inline-block">
            <img src={logo} alt="Stretch-IT Concepts" className="h-8 w-auto" />
          </div>
          <p className="mt-4 text-paper/60 leading-relaxed text-[15px] max-w-xs">
            Established to help businesses of all sizes improve their HR practices,
            increase organizational effectiveness, and achieve their strategic goals.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" aria-label="Facebook" className={socialLinkClass}>
              <FaFacebookF size={14} />
            </a>
            <a href="#" aria-label="X" className={socialLinkClass}>
              <FaXTwitter size={14} />
            </a>
            <a href="#" aria-label="Instagram" className={socialLinkClass}>
              <FaInstagram size={14} />
            </a>
            <a href="#" aria-label="YouTube" className={socialLinkClass}>
              <FaYoutube size={14} />
            </a>
            <a href="#" aria-label="LinkedIn" className={socialLinkClass}>
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-label uppercase tracking-[0.15em] text-xs text-gold mb-5">Contact Info</h4>
          <ul className="space-y-4 text-[15px] text-paper/75">
            <li className="flex gap-3">
              <MapPin size={17} className="shrink-0 mt-0.5 text-paper/40" />
              {contactInfo.address}
            </li>
            <li className="flex gap-3">
              <Mail size={17} className="shrink-0 mt-0.5 text-paper/40" />
              {contactInfo.email}
            </li>
            <li className="flex gap-3">
              <Phone size={17} className="shrink-0 mt-0.5 text-paper/40" />
              {contactInfo.phone}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-label uppercase tracking-[0.15em] text-xs text-gold mb-5">Newsletter</h4>
          <p className="text-paper/60 text-[15px] mb-4">
            Get the latest news about Stretch-IT Concepts, straight to your inbox.
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-white/5 border border-paper/15 rounded-l-lg px-4 py-3 text-sm placeholder:text-paper/40 focus:outline-none focus:border-gold"
            />
            <button className="bg-gold text-ink px-5 rounded-r-lg font-label text-sm font-medium hover:bg-gold/90 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="max-w-content mx-auto px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-paper/50">
          <span>© Stretch-IT Concepts {new Date().getFullYear()}. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-gold transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
