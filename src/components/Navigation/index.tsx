import { createSelector, For, createSignal, mapArray } from "solid-js";
import Nav from "~/components/Navigation/nav";
import NavItem from "~/components/Navigation/nav-item";
import ThemeSwitcher from "~/components/theme-switcher";

type MenuItem = {
  id: number;
  path: string;
  label: string;
  active: boolean;
};

export default function Navigation(props) {
  const isSelected = createSelector((): string => location?.pathname);

  return (
    <nav
      id="navbar-default"
      class={`fixed top-12 bottom-0 ${
        props.toggle ? "right-0" : "-right-full"
      } w-52 md:w-auto md:static ${props.classOption} transition-all duration-300`}
    >
      <Nav>
        <For each={props.items}>
          {(item: MenuItem) => (
            <NavItem
              id={item.id}
              href={item.path}
              isActive={isSelected(item.path)}
            >
              {item.label}
            </NavItem>
          )}
        </For>
        <li>
          <ThemeSwitcher />
        </li>
      </Nav>
    </nav>
  );
}
