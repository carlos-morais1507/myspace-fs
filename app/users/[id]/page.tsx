import { FollowButton } from '@/components/FollowButton/FollowButton';
import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } })
  return { title: `Perfil de ${user?.name}` }
}

export default async function UserProfile ({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } })
  const { name, bio, image } = user ?? {};

  return (
    <div className='flex flex-col gap-3'>
      <h1 className='font-bold text-3xl'>{name}</h1>

      <img
        width={300}
        src={image ?? '/mememan.webp'}
        alt={`Perfil do ${name}`}
      />

      <h3 className='font-semibold text-xl'>Bio</h3>
      <p>{bio}</p>

      
      <FollowButton targetUserId={params.id} />
    </div>
  )
}