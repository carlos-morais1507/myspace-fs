import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";

export default async function Users() {
  const res = await fetch('https://myspace-fs.vercel.app/api/users').then((res) => res.json())

  return (
    <div className="flex gap-3 flex-wrap items-center justify-center">
      {res.map((user: any) => {
        return <UserCard key={user.id} {...user} />
      })}
    </div>
  )
}