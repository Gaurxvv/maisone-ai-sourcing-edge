import { motion } from "framer-motion";
import {
  ArrowRight,
  Network, Search, Globe2, Workflow, Truck, TrendingUp,
  PackageSearch, Bot, ShieldAlert, Zap,
} from "lucide-react";

const categories = [
  { name: "Flat Knits", image: "/collection/Flat Knits/1.png", hoverImage: "/collection/Flat Knits/2.png", hue: "from-rose-500/30 to-amber-700/40" },
  { name: "Leather", image: "/collection/Leather/1.jpg", hue: "from-pink-500/30 to-rose-700/40" },
  { name: "Denim", image: "/collection/Denim/1.png", hue: "from-blue-700/40 to-indigo-900/50" },
  { name: "Contemporary ready to wear", image: "/collection/Contemporary ready to wear/1.png", hoverImage: "/collection/Contemporary ready to wear/2.jpg", hue: "from-violet-500/30 to-fuchsia-700/40" },
  { name: "Couture", image: "/collection/Couture/1.png", hue: "from-slate-500/40 to-zinc-800/50" },
  { name: "Accessories", image: "/collection/Accessories/1.jpg", hoverImage: "/collection/Accessories/2.png", hue: "from-amber-700/40 to-stone-800/50" },
];

const features = [
  { icon: Network, title: "AI Supplier Matching", desc: "Semantic vector matching across 50K+ verified vendors by capability, MOQ, lead time and ethics score." },
  { icon: Search, title: "Smart Product Discovery", desc: "Image-to-supplier search powered by multimodal models trained on textile, trim and silhouette taxonomies." },
  { icon: Globe2, title: "Global Vendor Network", desc: "Curated mills and ateliers in Tokyo, London, Paris, Milan, Berlin, New York and Los Angeles." },
  { icon: Workflow, title: "Procurement Automation", desc: "From RFQ to PO in minutes. Auto-route quotes, negotiate terms and trigger contract workflows." },
  { icon: Truck, title: "Real-Time Shipment Tracking", desc: "Container-level visibility across air, sea and rail with predictive ETAs and customs alerts." },
  { icon: TrendingUp, title: "Fashion Trend Intelligence", desc: "Runway, social and retail signals condensed into actionable colour, fabric and silhouette forecasts." },
  { icon: PackageSearch, title: "Inventory Forecasting", desc: "Demand models trained on your sell-through data anticipate stock-outs eight weeks ahead." },
  { icon: Bot, title: "AI Chat Assistant", desc: "A sourcing copilot that drafts briefs, summarises quotes and answers supplier questions, 24/7." },
  { icon: ShieldAlert, title: "Supplier Risk Analysis", desc: "Continuous monitoring of compliance, financial health and geopolitical exposure." },
  { icon: Zap, title: "Workflow Automation", desc: "Connect Notion, Zoho, WhatsApp and email to orchestrate every step of your supply chain." },
];

const pairs = [
  {
    problem: "Struggling to find reliable factories?",
    solution: "We connect brands with trusted manufacturing partners.",
  },
  {
    problem: "Need tighter quality control?",
    solution: "Our rigorous inspection systems ensure premium quality.",
  },
  {
    problem: "Need compliance-ready factories?",
    solution: "We help establish ethically responsible production ecosystems.",
  },
  {
    problem: "Looking for innovative materials?",
    solution: "Access cutting-edge fabrics and sustainable sourcing solutions.",
  },
  {
    problem: "Want to focus on growth?",
    solution: "We handle sourcing and operations while you focus on creativity.",
  },
];

export function ProductCategories() {
  return (
    <section id="categories" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 space-y-32">
        
        {/* Main Section Header */}
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-electric mb-6">— Sourcing Categories & Capabilities</p>
          <h2 className="font-serif text-4xl sm:text-6xl tracking-tight text-balance">
            A full spectrum of <span className="italic gradient-text">luxury categories</span> & intelligent sourcing solutions.
          </h2>
        </div>

        {/* 1. Product Categories Sub-section */}
        <div>
          <div className="mb-10 border-b border-border/40 pb-4">
            <h3 className="font-serif text-2xl tracking-wide">Product Categories</h3>
            <p className="text-sm text-muted-foreground mt-1">Our curated selection of manufacturing domains.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong"
              >
                <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-110" />
                {c.hoverImage && (
                  <img src={c.hoverImage} alt={`${c.name} Alternate`} className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110" />
                )}
                <div className={`absolute inset-0 bg-gradient-to-br ${c.hue} mix-blend-overlay opacity-60 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-electric mb-2 opacity-80">
                    Category {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif text-2xl leading-tight text-balance">{c.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Capabilities (Features) Sub-section */}
        <div>
          <div className="mb-10 border-b border-border/40 pb-4">
            <h3 className="font-serif text-2xl tracking-wide">Capabilities</h3>
            <p className="text-sm text-muted-foreground mt-1">Ten modules engineered to compress months of sourcing work.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border rounded-3xl overflow-hidden">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 5) * 0.08 }}
                className="group relative bg-background p-8 hover:bg-accent/40 transition-colors"
              >
                <div className="size-11 rounded-xl glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <f.icon className="size-5 text-electric" />
                </div>
                <h3 className="text-base font-medium mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                <div className="absolute top-6 right-6 text-[10px] text-muted-foreground/50 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Challenges We Solve Sub-section */}
        <div>
          <div className="mb-10 border-b border-border/40 pb-4">
            <h3 className="font-serif text-2xl tracking-wide">Challenges We Solve</h3>
            <p className="text-sm text-muted-foreground mt-1">Every bottleneck resolved by our supply chain experts.</p>
          </div>
          <div className="space-y-4">
            {pairs.map((p, i) => (
              <motion.div
                key={p.problem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-5 glass-strong rounded-3xl p-6 md:p-8"
              >
                <p className="font-serif text-xl md:text-2xl text-balance">{p.problem}</p>
                <ArrowRight className="size-5 text-electric mx-auto rotate-90 md:rotate-0" />
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{p.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
