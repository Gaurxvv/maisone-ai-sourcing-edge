import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-electric mb-6">{t("about.label")}</p>
          <h2 className="font-serif text-4xl sm:text-6xl tracking-tight text-balance">
            {t("about.heading")} <span className="italic gradient-text">{t("about.headingHighlight")}</span>{t("about.headingEnd")}
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              {t("about.p1")}
            </p>
            <p>
              {t("about.p2")}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-20">
          {[
            {
              icon: Target,
              label: t("about.missionLabel"),
              text: t("about.missionText"),
            },
            {
              icon: Eye,
              label: t("about.visionLabel"),
              text: t("about.visionText"),
            },
          ].map((b) => (
            <div key={b.label} className="glass-strong rounded-3xl p-8">
              <div className="size-11 rounded-2xl bg-electric/15 flex items-center justify-center mb-5">
                <b.icon className="size-5 text-electric" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-electric mb-3">— {b.label}</p>
              <p className="font-serif text-2xl leading-snug text-balance">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
