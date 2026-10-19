import { name } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 px-6 py-8 text-center sm:px-8">
      <p className="text-xs text-slate-500">
        © {new Date().getFullYear()} {name} · Built with React, TypeScript &
        Tailwind CSS
      </p>
    </footer>
  );
}
