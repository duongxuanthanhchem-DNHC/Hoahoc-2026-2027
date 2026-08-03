import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Học Hóa - 2026-2027</title>
      </Head>

      <main className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với Học Hóa 2026-2027</h1>
        <p className="text-lg text-gray-700 mb-6">Website học tập mẫu — bài học, quiz, và theo dõi tiến độ.</p>

        <div className="space-y-4">
          <a className="block p-4 border rounded hover:bg-gray-50" href="#">Danh sách khóa học</a>
          <a className="block p-4 border rounded hover:bg-gray-50" href="#">Đăng nhập / Đăng ký</a>
          <a className="block p-4 border rounded hover:bg-gray-50" href="#">Trang quản trị</a>
        </div>
      </main>
    </Layout>
  )
}
