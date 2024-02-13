import React from 'react';
import Link from 'next/link'

export default function Home() {

  async function sendLike(formData: FormData) {
    'use server'

    const rawFormData = {
      likeId: formData.get('likeId'),
    }

    console.log('Server action runs, receives:', rawFormData)

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-3 gap-4 p-8">
        <div className="col-span-3 bg-gray-200 p-4">
          <h1 className="text-lg">Server Action invocation scroll issue</h1>
          <div>Experiencing this issue where first invocation of a server action on first visit scrolls the age to the top.</div>
          <div>It seems to be related to loading state or the type of link used to access the affected page.</div><br />
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/1">✅ No loading.tsx</Link><br />
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/2">❌ Animated loading.tsx</Link><br />
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/3" scroll={false}>{`✅ This route is accessed with scroll={false}`}</Link><br />
        </div>
      </div>
    </main>
  );
}
