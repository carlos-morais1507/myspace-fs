'use client';

const ProfileForm = ({ user }: any) => {

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    };

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    await res.json();
    alert('OK!');
  }

  return (
    <div>
      <h2 className="font-semibold text-xl">Edite seu perfil</h2>
      <form onSubmit={updateUser} className="flex flex-col gap-3 w-4/5 mx-auto mt-5">
        <label htmlFor="name" className="font-bold text-lg">Nome:</label>
        <input type="text" name="name" defaultValue={user?.name ?? ''} className="border-2 border-black p-1"/>
        <label htmlFor="bio" className="font-bold text-lg">Bio:</label>
        <textarea
          name="bio"
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ''}
          className="border-2 border-black p-1"
        ></textarea>
        <label htmlFor="age" className="font-bold text-lg">Idade:</label>
        <input type="text" name="age" defaultValue={user?.age ?? 0} className="border-2 border-black p-1"/>
        <label htmlFor="image" className="font-bold text-lg">URL da foto de Perfil:</label>
        <input type="text" name="image" defaultValue={user?.image ?? ''} className="border-2 border-black p-1"/>

        <button type="submit" className="underline border-2 border-black w-fit p-2 mx-auto mt-5">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default ProfileForm