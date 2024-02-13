import React from 'react';
import Link from 'next/link'

import LikeButton from './LikeButton';

const initialState = {
  message: '',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-3 gap-4 p-8">
        <div className="col-span-3 bg-gray-200 p-4">
          ❌ Undesired behaviour. This page has an animated loading.tsx and will scroll to top on first invocation of a server action on first visit<br />
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/">Home</Link><br />
        </div>
        {Array.from({ length: 20 }, (_, rowIndex) => (
          <React.Fragment key={`row-${rowIndex}`}>
            {Array.from({ length: 3 }, (_, colIndex) => (
              <div key={`col-${rowIndex}-${colIndex}`} className="bg-gray-100 p-4">
                Row {rowIndex + 1}, Col {colIndex + 1}
                <LikeButton identifier={`${rowIndex + 1}-${colIndex + 1}`} />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
