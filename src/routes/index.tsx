import { A } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="text-center mx-auto text-slate-700 p-4 dark:bg-slate-700 dark:text-slate-300">
      <h1 class="max-6-xs text-6xl font-thin uppercase my-16 dark:text-slate-200">
        Hello world!
      </h1>
      <Counter />
      <p class="mt-8">
        Visit{" "}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-emerald-800 dark:text-blue-400 hover:underline"
        >
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <A href="/about" class="text-amber-600 hover:underline">
          About Page
        </A>{" "}
      </p>
    </main>
  );
}
