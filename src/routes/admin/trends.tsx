import { createFileRoute } from "@tanstack/react-router";
import { TrendsWrapper } from "../admin";

export const Route = createFileRoute("/admin/trends")({
  component: TrendsRoute,
});

function TrendsRoute() {
  return <TrendsWrapper />;
}
