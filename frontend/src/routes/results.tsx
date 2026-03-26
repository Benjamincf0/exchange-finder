import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/results")({
  component: () => <h1>Results Page</h1>,
});
