import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Monetrix",
    default: "Monetrix",
  },
  description:
    "Monetrix is a finance dashboard app in which registered users can add, edit, delete, and manage their invoices.",
  metadataBase: new URL("https://monetrix.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
