import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://happysecondanniversary.vercel.app'),
  title: 'Happy anniversary mohamed! 🎂',
  description: 'A special anniversary message for mohamed 🤍',
  openGraph: {
    title: 'Happy anniversary mohamed! 🎂',
    description: 'A special anniversary message for mohamed 🤍',
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
        alt: 'Happy anniversary mohamed Cat 🐱🎂',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy anniversary mohamed! 🎂',
    description: 'A special anniversary message for mohamed 🤍',
    images: ['https://happysecondanniversary.vercel.app/images/og-anniversary.jpg'],
  },
}

export default function Home() {
  const data = giftData.mohamed || giftData.ahmed || giftData.amir
  return <GiftClient data={data} />
}