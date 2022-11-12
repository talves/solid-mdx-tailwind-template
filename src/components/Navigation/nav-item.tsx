import { A } from "solid-start";

export default function NavItem(props) {

  return (
    <li>
      <A
        href={props.href}
        aria-label={`${props.children}`}
        class={`block p-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
      >
        {props.children}
      </A>
    </li>
  );
}
