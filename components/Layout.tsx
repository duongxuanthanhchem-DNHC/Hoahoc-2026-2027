import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-semibold">Học Hóa</div>
          <nav className="space-x-4">
            <a href="#" className="text-sm text-gray-600">Khóa học</a>
            <a href="#" className="text-sm text-gray-600">Giáo viên</a>
            <a href="#" className="text-sm text-gray-600">Đăng nhập</a>
          </nav>
        </div>
      </header>

      <div>{children}</div>

      <footer className="mt-20 py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Học Hóa
      </footer>
    </div>
  )
}
