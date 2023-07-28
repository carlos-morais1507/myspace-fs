import Link from "next/link";


import React from 'react'
import { SignInButton } from "@/components/buttons";

const NavMenu = () => {
  return (
    <nav className="fixed top-0 z-50 bg-blue-600 text-white flex h-[65px] w-full items-center justify-around">
      <Link href={'/'}>
        <img
          src="/logo.svg"
          width={216}
          height={30}
          alt="NextSpace Logo"
        />
      </Link>
      <ul className="flex gap-3 font-bold underline items-center">
        <li>
          <Link href={'/about'}>Sobre</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'/users'}>Pessoas</Link>
        </li>
        <li className="ml-5">
          <SignInButton />
        </li>
      </ul>     
    </nav>
  )
}

export default NavMenu