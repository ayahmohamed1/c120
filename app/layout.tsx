import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://happysecondanniversary.vercel.app'),
  title: 'Happy Anniversary Mohamed! 🤍',
  description: 'A special anniversary message for Mohamed 🤍',
  openGraph: {
    title: 'Happy Anniversary Mohamed! 🤍',
    description: 'A special anniversary message for Mohamed 🤍',
    url: 'https://happysecondanniversary.vercel.app',
    siteName: 'Anniversary Gift',
    type: 'website',
    images: [
      {
        url: 'https://happysecondanniversary.vercel.app/images/og-anniversary.jpg',
        secureUrl: 'https://happysecondanniversary.vercel.app/images/og-anniversary.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Happy Anniversary Mohamed Cat 🐱🤍',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Anniversary Mohamed! 🤍',
    description: 'A special anniversary message for Mohamed 🤍',
    images: ['https://happysecondanniversary.vercel.app/images/og-anniversary.jpg'],
  },
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
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Nunito:wght@300;400;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
