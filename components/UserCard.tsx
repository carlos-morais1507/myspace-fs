import Link from 'next/link'

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

const UserCard = ({ id, name, age, image }: Props) => {
  return (
    <div className='w-36 border-2 border-black p-4'>
      <img
        src={image ?? '/mememan.webp'}
        alt={`${name}'s profile`}
        className='w-full border-2 border-black'
      />
      <div>
        <h3 className='font-bold text-lg'><Link href={`/users/${id}`}>{name}</Link></h3>
      </div>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserCard