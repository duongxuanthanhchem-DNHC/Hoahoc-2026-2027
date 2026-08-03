import { useState } from 'react'
import supabase from '../lib/supabaseClient'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) setMessage(error.message)
    else setMessage('Kiểm tra email để xác thực (nếu bật email)')
    setLoading(false)
  }

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setMessage(error.message)
    else setMessage('Đăng nhập thành công')
    setLoading(false)
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    setMessage('Đã đăng xuất')
  }

  return (
    <div className="max-w-md mx-auto py-20 px-4">
      <h2 className="text-2xl font-semibold mb-4">Đăng nhập / Đăng ký</h2>

      <form className="space-y-3">
        <input
          className="w-full p-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-2 border rounded"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex space-x-2">
          <button onClick={signIn} className="px-4 py-2 bg-blue-600 text-white rounded" disabled={loading}>
            Đăng nhập
          </button>
          <button onClick={signUp} className="px-4 py-2 border rounded" disabled={loading}>
            Đăng ký
          </button>
          <button type="button" onClick={signOut} className="px-3 py-2 border rounded">
            Đăng xuất
          </button>
        </div>
      </form>

      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  )
}
