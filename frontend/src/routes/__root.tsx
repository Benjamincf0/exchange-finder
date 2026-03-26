import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div>
      <nav>navbar hohoho</nav>
      <Outlet />
      <footer>smelly feet</footer>
    </div>
  ),
});
