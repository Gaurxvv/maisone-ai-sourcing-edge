import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { Overview } from "@/components/maisone/Dashboard";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/admin/")({
  component: AdminIndexRoute,
});

function AdminIndexRoute() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("admin.searchBy")}
          className="w-full rounded-xl bg-foreground/[0.03] border border-foreground/10 pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-electric text-foreground"
        />
      </div>
      <Overview query={query} hideShipments={true} />
    </div>
  );
}
