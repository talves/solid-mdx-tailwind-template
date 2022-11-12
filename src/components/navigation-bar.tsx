import { createEffect, createSignal } from "solid-js";
import { A } from "solid-start";
import MenuButton from "~/components/menu-button";
import ThemeSwitcher from "~/components/theme-switcher";

export default function NavigationBar() {
  const [menuOpen, setOpen] = createSignal("false");

  createEffect(() => {
    console.log("The menu is open:", menuOpen());
  }, menuOpen());

  return (
    <header class="bg-white text-gray-800 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 dark:text-gray-300">
      <div class="container flex justify-between items-center mx-auto">
        <A href="/" class="flex items-center" aria-label="Site Root">
          <span class="self-center text-4xl font-semibold whitespace-nowrap dark:text-gray-100 italic">
            Solid Template
          </span>
        </A>
        <MenuButton onToggle={setOpen} />
        {/* <Navigation /> */}
        <div class="float-right absolute right-0">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
