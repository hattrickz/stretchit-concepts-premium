import { Phone, Mail, MapPin } from "lucide-react";
import { contactInfo } from "../lib/data";
import Reveal from "../components/Reveal";

export default function ContactInfoBand() {
  return (
    <section className="bg-paper -mt-14 relative z-10">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <Reveal>
          <div className="bg-indigo rounded-3xl p-8 sm:p-10 grid sm:grid-cols-3 sm:gap-8 shadow-xl shadow-indigo/20 divide-y divide-paper/10 sm:divide-y-0">
            <div className="flex gap-4 items-start pb-6 sm:pb-0">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Phone size={19} className="text-gold" />
              </div>
              <div className="min-w-0">
                <div className="font-label uppercase tracking-[0.1em] text-xs text-paper/60">
                  Call us
                </div>
                <div className="text-paper mt-1 font-medium break-words">{contactInfo.callUs}</div>
              </div>
            </div>

            <div className="flex gap-4 items-start py-6 sm:py-0">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Mail size={19} className="text-gold" />
              </div>
              <div className="min-w-0">
                <div className="font-label uppercase tracking-[0.1em] text-xs text-paper/60">
                  Message us
                </div>
                <div className="text-paper mt-1 font-medium break-words">{contactInfo.email}</div>
              </div>
            </div>

            <div className="flex gap-4 items-start pt-6 sm:pt-0">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <MapPin size={19} className="text-gold" />
              </div>
              <div className="min-w-0">
                <div className="font-label uppercase tracking-[0.1em] text-xs text-paper/60">
                  Visit our office
                </div>
                <div className="text-paper mt-1 font-medium">{contactInfo.address}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
