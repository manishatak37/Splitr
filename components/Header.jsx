"use client"
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn
} from "@clerk/nextjs";
import React from "react";
import { useStoreUser } from "@/hooks/use-store-user";
import Link from "next/link"
import Image from "next/image"; // ✅
import {BarLoader} from "react-spinners"

const Header = () => {
  const { isloading } = useStoreUser()
  return (
    <header className="fixed top-0 w-full border-b  bg-white/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/logos/logo.png"}
            alt="Splitr Logo"
            width={200}
            height={60}
            className="h-11 w-auto object-contain"
          />
        </Link>
      </nav>
      {isloading && <BarLoader width={"100%"} color="#36d7b7" />}

    </header>
  );
};

export default Header;