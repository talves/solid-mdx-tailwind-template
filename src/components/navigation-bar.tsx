import { createEffect, createSignal } from "solid-js";
import { A } from "solid-start";
import MenuButton from "~/components/menu-button";
import Navigation from "~/components/Navigation";

const data = {
  menu: {
    items: [
      { id:1, path: "/", label: "Home" },
      { id:2, path: "/about", label: "About" },
      { id:3, path: "/about-mdx", label: "MDX" },
    ],
  },
};

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
        <Navigation items={data?.menu.items} />
        {/* <div class="float-right absolute right-0">
          <ThemeSwitcher />
        </div> */}
      </div>
    </header>
  );
}
