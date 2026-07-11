import { motion } from "framer-motion";
import { Layers, ShieldCheck, Handshake, Sparkles } from "lucide-react";
import abstractBg from "@/assets/fashion_abstract_1_1783761906196.png";
import { useLanguage } from "@/lib/i18n";

export function WhyMaisone() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Layers,
      title: t("why.card1Title"),
      text: t("why.card1Text"),
    },
    {
      icon: ShieldCheck,
      title: t("why.card2Title"),
      text: t("why.card2Text"),
    },
    {
      icon: Handshake,
      title: t("why.card3Title"),
      text: t("why.card3Text"),
    },
    {
      icon: Sparkles,
      title: t("why.card4Title"),
      text: t("why.card4Text"),
    },
  ];

  return (
    <section id="why" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-electric mb-6">{t("why.label")}</p>
          <h2 className="font-serif text-4xl sm:text-6xl tracking-tight text-balance">
            {t("why.heading")} <span className="italic gradient-text">{t("why.headingHighlight")}</span>{t("why.headingEnd")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-strong rounded-3xl p-7 hover:-translate-y-1 transition-transform"
            >
              <div className="size-12 rounded-2xl bg-gradient-to-br from-electric/20 to-violet-glow/20 flex items-center justify-center mb-6">
                <c.icon className="size-5 text-electric" />
              </div>
              <h3 className="font-serif text-xl leading-snug">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Startup & Low MOQ Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 glass rounded-3xl overflow-hidden border border-electric/20 bg-electric/[0.02] flex flex-col md:flex-row items-stretch justify-between gap-0"
        >
          <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric/10 border border-electric/20 w-fit text-[9px] tracking-[0.2em] uppercase text-electric font-semibold mb-6">
              {t("why.startupFriendly")}
            </span>
            <h3 className="font-serif text-3xl mb-4 text-foreground">{t("why.startupTitle")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              {t("why.startupText")}
            </p>
            <a
              href="/book-demo"
              className="px-6 py-3 w-fit rounded-full bg-foreground text-background text-sm font-medium hover:scale-[1.02] transition-transform whitespace-nowrap"
            >
              {t("why.launchYourBrand")}
            </a>
          </div>
          <div className="md:w-1/2 relative min-h-[300px]">
            <img src={abstractBg} alt="Luxury abstract fabric" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent md:block hidden w-1/4" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent md:hidden block h-1/4 bottom-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
