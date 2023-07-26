"use client"
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main className="min-h-screen">
      {status === 'authenticated' ? (
        <><h2 className='text-2xl'>Opa, <span className='font-bold text-blue-600'>{session.user?.name}</span></h2></>
      ) : (
        <>
          <h2 className='mb-2 text-2xl'>Oi! Vi que você não tá loggado 😢</h2>
          <a className='mt-2 p-2 border-2 border-black' href={'http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F'}>Vamo Loggar?</a>
        </>
      )}
    </main>
  )
}
