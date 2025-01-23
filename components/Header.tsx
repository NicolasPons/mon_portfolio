import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="py-6 xl:py-6 text-white bg-secondary fixed top-0 w-full border-b-[1px] border-primary z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Nicolas PONS <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden md:hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        <div className=" xl:hidden">
            <MobileNav />
        </div>
      </div>
    </header>
  );
}
