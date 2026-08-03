# HoaHoc 2026-2027

Skeleton Next.js (TypeScript) + Tailwind + Supabase scaffold for a learning website.

## Thiết lập nhanh (local)

1. Cài Node.js (v18+)
2. Clone repo

```bash
git clone https://github.com/duongxuanthanhchem-DNHC/Hoahoc-2026-2027.git
cd Hoahoc-2026-2027
```

3. Cài phụ thuộc và chạy dev

```bash
npm install
npm run dev
```

4. Thiết lập Supabase
- Tạo project Supabase, lấy `SUPABASE_URL` và `SUPABASE_ANON_KEY`.
- Tạo file `.env.local` theo `.env.example`.

5. Triển khai
- Đăng ký Vercel và connect repo, đặt biến môi trường từ Supabase.

---

Nếu bạn muốn, mình sẽ tiếp tục thêm: authentication flow (Supabase Auth), CRUD lessons, quiz model, admin UI.
