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

<img width="1899" height="1063" alt="monetrix-homepage" src="https://github.com/user-attachments/assets/5bd80913-9135-4c8b-955f-e20951710938" />
<img width="1907" height="1071" alt="monetrix-dashboard" src="https://github.com/user-attachments/assets/832a71b3-87aa-48b5-a211-dc51a31ab9c3" />
<img width="1908" height="899" alt="monetrix-invoices" src="https://github.com/user-attachments/assets/2c348207-c233-4ee9-bfcb-2695ed292fea" />




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
