import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import ProfileForm from "./ProfileForm";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <>
        <h2 className='mb-2 text-2xl'>Oi! Vi que você não tá loggado 😢</h2>
        <a className='mt-2 p-2 border-2 border-black' href={'http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F'}>Vamo Loggar?</a>
      </>
    )
  }

  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  })

  return (
    <>  
      <h1 className="font-bold text-3xl">Seu Perfil</h1>
      <ProfileForm user={user} />
    </>
  )
}