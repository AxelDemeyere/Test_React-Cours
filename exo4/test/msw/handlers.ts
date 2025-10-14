import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('https://api.example.com/user/:username', ({ params }) => {
        const { username } = params
        if (username === 'alice') {
            return HttpResponse.json({ name: 'Alice' })
        }
        return new HttpResponse(null, { status: 404 })
    })
]