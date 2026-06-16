import { Logo } from "./Logo";
import { ArrowUpRight, Mail, MessageCircle, MapPin } from "lucide-react";

const contacts = [
  {
    region: "Italy",
    name: "Charlène Le Ray",
    phone: "+39 346 956 5469",
  },
  {
    region: "Japan / Asia",
    name: "Hada",
    phone: "+81 70-9284-5568",
    email: "Hada@maisone.in",
  },
  {
    region: "India",
    people: [
      { name: "Shashank", phone: "+91 9873820888", email: "Shashank@maisone.in" },
      { name: "Subah", phone: "+91 9811855070", email: "Subah@maisone.in" },
    ]
  }
];

export function Footer() {
  return (
    <footer id="contact" className="relative pt-24 pb-10 border-t border-border mt-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* CTA */}
        <div className="grid lg:grid-cols-2 gap-10 items-end pb-20 border-b border-border">
          <h2 className="font-serif text-4xl sm:text-6xl tracking-tight text-balance max-w-xl">
            Build the next chapter of your <span className="italic gradient-text">house</span>.
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-3 max-w-md w-full lg:justify-self-end"
          >
            <input
              type="text"
              placeholder="Your name"
              className="w-full glass rounded-2xl px-5 py-3.5 text-sm outline-none placeholder:text-muted-foreground"
            />
            <input
              type="email"
              placeholder="your@maison.com"
              className="w-full glass rounded-2xl px-5 py-3.5 text-sm outline-none placeholder:text-muted-foreground"
            />
            <textarea
              placeholder="Tell us about your brand and sourcing needs…"
              rows={3}
              className="w-full glass rounded-2xl px-5 py-3.5 text-sm outline-none placeholder:text-muted-foreground resize-none"
            />
            <button className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90">
              Send inquiry <ArrowUpRight className="size-3.5" />
            </button>
          </form>
        </div>

        {/* Contact strip */}
        <div className="grid md:grid-cols-3 gap-4 py-12 border-b border-border">
          <a href="mailto:shashank@maisone.in" className="glass-strong rounded-2xl p-5 flex items-center gap-4 hover:border-electric/40 transition-colors">
            <div className="size-10 rounded-xl bg-electric/15 flex items-center justify-center"><Mail className="size-4 text-electric" /></div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Email</p>
              <p className="text-sm mt-0.5">shashank@maisone.in</p>
            </div>
          </a>
          <a href="https://wa.me/919873820888" className="glass-strong rounded-2xl p-5 flex items-center gap-4 hover:border-electric/40 transition-colors">
            <div className="size-10 rounded-xl bg-emerald-500/15 flex items-center justify-center"><MessageCircle className="size-4 text-emerald-400" /></div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">WhatsApp</p>
              <p className="text-sm mt-0.5">Chat with our team</p>
            </div>
          </a>
          <a href="#contact" className="glass-strong rounded-2xl p-5 flex items-center gap-4 hover:border-electric/40 transition-colors">
            <div className="size-10 rounded-xl bg-violet-500/15 flex items-center justify-center"><MapPin className="size-4 text-violet-300" /></div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Global Presence</p>
              <p className="text-sm mt-0.5">Italy · Japan · India</p>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 py-16">
          <div className="col-span-2">
            <Logo />
            <p className="mt-5 text-sm text-muted-foreground max-w-xs">
              Built on trust, transparency, and craftsmanship.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">Head Office</p>
                <p className="text-xs text-foreground/80 leading-relaxed">
                  Plot 140, Udyog Vihar Industrial Area,<br />
                  Phase VI, Sector 37, Gurgaon - 122001
                </p>
              </div>
              <div className="text-xs text-muted-foreground">
                <p>hello@maisone.in</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5">Regional Contacts</p>
            <div className="space-y-4">
              {contacts.map((c, idx) => (
                <div key={idx} className="text-xs border-l border-white/10 pl-3">
                  <p className="font-semibold text-white tracking-wider mb-1 uppercase text-[10px]">{c.region}</p>
                  {c.people ? (
                    <div className="space-y-2.5 mt-1.5">
                      {c.people.map((p, pIdx) => (
                        <div key={pIdx}>
                          <p className="text-foreground font-medium">{p.name}</p>
                          <p className="text-muted-foreground text-[11px]">Phone: {p.phone}</p>
                          <p className="text-muted-foreground text-[11px]">Email: {p.email}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-1">
                      <p className="text-foreground font-medium">{c.name}</p>
                      <p className="text-muted-foreground text-[11px]">Phone: {c.phone}</p>
                      {c.email && <p className="text-muted-foreground text-[11px]">Email: {c.email}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {[
            { title: "Company", links: ["About", "How We Work", "Founders", "Case Studies"] },
            { title: "Legal", links: ["Privacy", "Terms", "Compliance", "Sustainability"] },
          ].map((c) => (
            <div key={c.title} className="col-span-1">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5">{c.title}</p>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm hover:text-electric transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border text-xs text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} Maisone Global. All rights reserved.</p>
          <div className="flex gap-5">
            {["Instagram", "LinkedIn", "X", "Vimeo"].map((s) => (
              <a key={s} href="#" className="hover:text-foreground transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
