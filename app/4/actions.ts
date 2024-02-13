'use server'

export async function sendLike(previousState, formData: FormData) {
    'use server'

    const rawFormData = {
      likeId: formData.get('likeId'),
    }

    console.log('Server action runs, receives:', rawFormData)

    return { message: 'liked' }

}