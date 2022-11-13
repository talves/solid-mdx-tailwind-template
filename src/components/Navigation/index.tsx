import { createSelector, For, createSignal, mapArray } from "solid-js";
import { MapToFunction } from "vite";
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
  const [items, setItems] = createSignal<MenuItem[]>(props.items.map((item: MenuItem) => {
    console.log("isSelected:",item.path, isSelected(item.path))
    item.active = isSelected(item.path);
    return item;
  }));
console.log("items()", items())
  function handleItemClick(path:string) {
    console.log("clicked on route:", path)
    const prevItems: MenuItem[] = items().map((item) => {
      item.active = path === item.path;
      return {...item};
    });
    setItems(prevItems)
  }

  return (
    <nav
      id="navbar-default"
      class={`fixed top-12 bottom-0 ${
        props.toggle ? "right-0" : "-right-full"
      } w-52 md:w-auto md:static ${props.classOption} transition-all duration-300`}
    >
      <Nav>
        <For each={items()}>
          {(item: MenuItem) => (
            <NavItem
              id={item.id}
              href={item.path}
              isActive={item.active}
              // isActive={isSelected(item.path)}
              handleItemClick={handleItemClick}
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
