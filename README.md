### Cập nhật README: hướng dẫn authentication & migration

Đã thêm:
- pages/auth.tsx — trang đăng nhập / đăng ký mẫu dùng Supabase Auth
- lib/supabaseClient.ts — client Supabase cho Next.js
- db/schema.sql — SQL mẫu để tạo bảng Courses, Lessons, Quizzes, Profiles, v.v.

Hướng dẫn nhanh sau khi đã có `NEXT_PUBLIC_SUPABASE_URL` và `NEXT_PUBLIC_SUPABASE_ANON_KEY`:

1. Chạy local:
   npm install
   npm run dev

2. Migrate schema vào Supabase
- Mở SQL Editor trong Supabase dashboard của project → dán nội dung `db/schema.sql` → Run

3. Truy cập http://localhost:3000/auth để thử đăng ký / đăng nhập

Bạn muốn mình tiếp tục với: (1) CRUD pages cho lessons & courses, (2) Admin dashboard, (3) CI build action? Trả lời số thứ tự hoặc mô tả.
