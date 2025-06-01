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

const Header = () => {
  const { isloading } = useStoreUser()
  return (
        <header className="fixed top-0 w-full border-b  bg-white/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60">
          <nav>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </nav>
        {isloading && <BarLoader  width={"100%"} color="#36d7b7" />}

      </header>
  );
};

export default Header;