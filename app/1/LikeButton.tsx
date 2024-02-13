'use client'

import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { sendLike } from './actions'
import toast from 'react-hot-toast'

const initialState = {
  message: '',
}

export default function LikeButton({identifier}: {identifier: string}) {
  const [likeState, setLikeFormState] = useFormState(sendLike, initialState)

  useEffect(() => {
    if (likeState.message === "liked") {
      toast.success('You liked the thing! (Nothing really happened except for a round trip to the server action)')
    }
  }, [
    likeState
  ])

  return (
    <form action={setLikeFormState}>
        <input type="hidden" name="likeId" value={identifier}></input>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" type="submit">Like</button>
    </form>
  );
}
