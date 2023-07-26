import Link from 'next/link'

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

const UserCard = ({ id, name, age, image }: Props) => {

  return (
    <div className='w-48 border-2 border-black p-4'>
      <img
        src={image ?? '/mememan.webp'}
        alt={`${name}'s profile`}
        className='w-full border-2 border-black'
      />
      <div className='max-h-7 text-clip w-full'>
        <h3 className='font-bold text-lg truncate'><Link href={`/users/${id}`}>{name}</Link></h3>
      </div>
      <p>Idade: {age}</p>
    </div>
  );
}

export default UserCard