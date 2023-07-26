import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect('/api/auth/signin')
  }
 
  return (
    <main className="min-h-screen">
      <h1 className='text-2xl'>Opa, <span className='font-bold text-blue-600'>{session.user?.name}!</span></h1>
      <p>Você tá loggado!</p>
    </main>
  )
}
