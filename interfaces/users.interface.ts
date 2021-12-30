interface User {
    id: number
    username: string
    password?: string
    created_at: string
    updated_at: string
    isActive: boolean
}

interface UserParams {
    username: string
    password: string
}

export { User, UserParams };