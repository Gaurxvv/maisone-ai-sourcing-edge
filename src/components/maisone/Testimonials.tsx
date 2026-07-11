import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export function Testimonials() {
  const { t } = useLanguage();

  const items = [
    {
      quote: t("testimonials.quote1"),
      name: "Aiko Tanaka",
      role: "Head of Production · Maison Kyō",
    },
    {
      quote: t("testimonials.quote2"),
      name: "Oliver Hartwell",
      role: "Founder · Atelier LDN",
    },
    {
      quote: t("testimonials.quote3"),
      name: "Camille Laurent",
      role: "COO · North/Paris",
    },
  ];

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-electric mb-6">{t("testimonials.label")}</p>
          <h2 className="font-serif text-4xl sm:text-6xl tracking-tight text-balance">
            {t("testimonials.heading")} <span className="italic gradient-text">{t("testimonials.headingHighlight")}</span>{t("testimonials.headingEnd")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((tItem, i) => (
            <motion.figure
              key={tItem.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-strong rounded-3xl p-8 flex flex-col justify-between min-h-[280px]"
            >
              <blockquote className="font-serif text-xl leading-snug text-balance">
                "{tItem.quote}"
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-sm font-medium">{tItem.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{tItem.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
