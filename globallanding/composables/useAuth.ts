const USERS_KEY = 'gg_users'
const SESSION_KEY = 'gg_session'

export const useAuth = () => {
  const getUsers = (): any[] => {
    if (import.meta.server) return []
    try { return JSON.parse(localStorage.getItem(USERS_KEY) || '[]') } catch { return [] }
  }

  const getSession = (): any | null => {
    if (import.meta.server) return null
    try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null') } catch { return null }
  }

  const setSession = (user: any) => localStorage.setItem(SESSION_KEY, JSON.stringify(user))
  const clearSession = () => localStorage.removeItem(SESSION_KEY)
  const isLoggedIn = () => !!getSession()

  const signup = (name: string, email: string, password: string) => {
    const users = getUsers()
    if (users.find((u: any) => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: 'An account with this email already exists.' }
    }
    users.push({ name, email: email.toLowerCase(), password, createdAt: Date.now() })
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
    setSession({ name, email: email.toLowerCase() })
    return { success: true }
  }

  const login = (email: string, password: string) => {
    const users = getUsers()
    const user = users.find((u: any) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)
    if (!user) return { success: false, error: 'Invalid email or password. Please try again.' }
    setSession({ name: user.name, email: user.email })
    return { success: true }
  }

  return { signup, login, logout: clearSession, getSession, isLoggedIn }
}
