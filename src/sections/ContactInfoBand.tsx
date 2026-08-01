import { Phone, Mail, MapPin } from "lucide-react";
import { contactInfo } from "../lib/data";
import Reveal from "../components/Reveal";

const items = [
  { icon: Phone, label: "Call us", value: contactInfo.callUs },
  { icon: Mail, label: "Message us", value: contactInfo.email },
  { icon: MapPin, label: "Visit our office", value: contactInfo.address },
];

export default function ContactInfoBand() {
  return (
    <section className="bg-paper -mt-14 relative z-10">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <Reveal>
          <div className="bg-indigo rounded-3xl p-8 sm:p-10 grid sm:grid-cols-3 gap-8 shadow-xl shadow-indigo/20">
            {items.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-gold" />
                </div>
                <div>
                  <div className="font-label uppercase tracking-[0.1em] text-xs text-paper/60">
                    {label}
                  </div>
                  <div className="text-paper mt-1 font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
