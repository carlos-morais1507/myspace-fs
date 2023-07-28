'use client';

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

interface Props {
  targetUserId: string;
  isFollowing: boolean;
}

export default function FollowerClient({ targetUserId, isFollowing }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  const follow = async () => {
    setIsFetching(true);

    const res = await fetch('/api/follow', {
      method: 'POST',
      body: JSON.stringify({ targetUserId }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    setIsFetching(false);

    console.log(res)

    startTransition(() => {
      router.refresh()
    })
  }

  const unfollow = async () => {
    setIsFetching(true);

    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: 'DELETE',
    });

    setIsFetching(false);
    startTransition(() => router.refresh())
  }

  if (isFollowing) {
    return (
      <button onClick={unfollow} className="underline border-2 border-black w-fit p-2 mx-auto mt-5">
        {!isMutating ? 'Deixar de Seguir' : '...'}
      </button>
    )
  } else {
    return (
      <button onClick={follow} className="underline border-2 border-black w-fit p-2 mx-auto mt-5">
        {!isMutating ? 'Seguir' : '...'}
      </button>
    )
  }
}