import Link from "next/link";
import React from "react";
import { LibraryIcon } from "lucide-react";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <LibraryIcon className="size-6" />
        <span className="sr-only">Uzbekistan Museums</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {/* <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Explore
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Tickets
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link> */}

        {/* to be changed when we have a login system */}

        <Link
          className={`${buttonVariants({ variant: "link" })}`}
          href="/singup"
        >
          Sign up
        </Link>
        <Link
          className={`${buttonVariants({ variant: "link" })}`}
          href="/singin"
        >
          Sign in
        </Link>
      </nav>
    </header>
  );
}
