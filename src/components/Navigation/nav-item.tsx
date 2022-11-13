import { A } from "solid-start";

export default function NavItem(props: { id:number, handleItemClick: (arg0: string) => void; href: string; children: string; isActive: boolean; }) {

  function handleClick() {
    if (typeof props.handleItemClick==="function") {
      props.handleItemClick(props.href);
    }
  }

  return (
    <li>
      <A
        href={props.href}
        aria-label={`${props.children}`}
        class={`block p-4 md:border-0 md:hover:text-blue-700 md:dark:hover:text-white dark:hover:text-white${props.isActive ? " bg-gray-700 text-gray-200" : "text-gray-700 hover:bg-gray-400"}`}
        onclick={handleClick}
      >
        {`${props.children}${props.isActive ? "*": ""}`}
      </A>
    </li>
  );
}
