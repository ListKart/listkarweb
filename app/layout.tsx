import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ListKart - Smart Shopping List',
  description: 'Download ListKart - The ultimate smart shopping list app. Never forget anything again.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/assets/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
