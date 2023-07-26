import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className="flex gap-3">
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />
      })}
    </div>
  )
}