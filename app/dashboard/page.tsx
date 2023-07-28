import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import ProfileForm from "./ProfileForm";
import { signIn } from "next-auth/react";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <>
        <h2 className='mb-2 text-2xl'>Oi! Vi que você não tá loggado 😢</h2>
        <button className='mt-2 p-2 border-2 border-black' onClick={() => signIn()}>Vamo Loggar?</button>
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