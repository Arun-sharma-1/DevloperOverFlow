import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flex-between items-center background-light900_dark200 fixed z-50 w-full gap-5 p-4 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex justify-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          alt="Logo"
          width={23}
          height={23}
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
       <GlobalSearch />
      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
