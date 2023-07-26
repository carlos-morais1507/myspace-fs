'use client'; // Error components must be Client components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className='font-bold text-3xl'>Parado ai!🤚 Deu ruim...</h2>
      <p>Provavelmente é minha culpa... Eu sou só um dev jr. né 🤷‍♂️</p>
      <button className='mt-5 p-2 border-2 border-black underline' onClick={() => reset()}>Tentar Novamente</button>
    </div>
  )
}