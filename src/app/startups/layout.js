import { Vazirmatn } from 'next/font/google'

const vazir = Vazirmatn({ subsets: ['arabic', 'latin'] })

export const metadata = {
  title: 'استارت آپ استدیو Infinity Lab',
  description: ' جامعه استارتاپی با اداره غیرمتمرکز و خود گردان (DAO) برای تبدیل ایده‌های نو به محصولات قابل ارائه در بازار   ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir='rtl'>
      <body className={vazir.className}>{children}</body>
    </html>
  )
}
