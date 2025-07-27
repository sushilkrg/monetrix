# 💰 Monetrix – Finance Dashboard App

Monetrix is a full-stack finance dashboard application that helps users **manage their invoices**, **track financial data visually**, and **search or paginate through records seamlessly**.

Built while mastering Next.js through its official documentation, Monetrix showcases best practices in performance, SEO, accessibility, and modern full-stack architecture.

---

## 🚀 Features

- ✅ User authentication (if implemented)
- 📄 Add, edit, delete invoices
- 🔍 Search with **debouncing** for performance
- 📚 Paginated invoice list
- 📊 Graph-based invoice visualization
- 🌐 SEO-optimized and accessible design
- ⚡️ Fast and responsive UI

---

## 🧰 Tech Stack

- **Frontend & Backend:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Database:** [NeonDB (PostgreSQL)](https://neon.tech/)
- **Validation:** Zod
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

---

## 📸 Screenshots

<!-- You can upload images and link them like below -->
<!-- ![Dashboard](./public/screenshots/dashboard.png) -->
<!-- ![Add Invoice](./public/screenshots/add-invoice.png) -->

---

## 📦 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/sushilkrg/monetrix.git
cd monetrix
npm install

```

---

2. **Add environment varialbes(in .env)**

```bash
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=

# `openssl rand -base64 32`
AUTH_SECRET=
AUTH_URL=http://localhost:3000/api/auth

```
3. **Now run your app**

```bash
pnpm run dev
```