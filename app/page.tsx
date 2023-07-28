"use client"
import { signIn, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main className="min-h-screen">
      {status === 'authenticated' ? (
        <><h2 className='text-2xl'>Opa, <span className='font-bold text-blue-600'>{session.user?.name}</span></h2></>
      ) : (
        <>
          <h2 className='mb-2 text-2xl'>Oi! Vi que você não tá loggado 😢</h2>
          <button className='mt-2 p-2 border-2 border-black' onClick={() => signIn()}>Vamo Loggar?</button>
        </>
      )}
    </main>
  )
}
