import Link from "next/link";
import Image from "next/image";

import React from 'react'

const NavMenu = () => {
  return (
    <nav className="fixed top-0 z-50 bg-blue-600 text-white flex h-[65px] w-full items-center justify-around">
      <Link href={'/'}>
        <Image
          src="/logo.svg"
          width={216}
          height={30}
          alt="NextSpace Logo"
        />
      </Link>
      <ul className="flex gap-3 font-bold">
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'/users'}>Users</Link>
        </li>
      </ul>     
    </nav>
  )
}

export default NavMenu