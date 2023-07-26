'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';
import Image from 'next/image';

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === 'loading') {
    return <>...</>;
  }

  if (status === 'authenticated') {
    return (
      <div className="flex gap-2">
      <Link href={`/dashboard`}>
        <Image
          src={session.user?.image ?? '/mememan.webp'}
          width={32}
          height={32}
          alt="Your Name"
        />
      </Link>
      <button onClick={() => signOut()} className="bg-white text-black underline p-1">Sair</button>
      </div>
    )
  }

  return <button onClick={() => signIn()} className="bg-white text-black underline p-1">Entrar</button>
}

export function SignOutButton() {
  return <button onClick={() => signOut()} className="bg-white text-black underline p-1">Sair</button>
}