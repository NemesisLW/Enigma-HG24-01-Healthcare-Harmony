import { NavItems } from "@/lib/config/site";

import MainNav from "./main-nav";
import { DarkModeToggle } from "./mode-toggle";
import UserMenu from "./user-menu-dropdown";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent shadow-[0_0px_10px_rgb(55,55,55)] backdrop-blur-md backdrop-filter">
      <div className="mx-auto flex h-20 max-w-7xl flex-col items-center gap-6 py-5 pl-2 sm:flex-row md:gap-10">
        <MainNav items={NavItems} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <DarkModeToggle />
            <UserMenu />
          </nav>
        </div>
      </div>
    </header>
  );
}
