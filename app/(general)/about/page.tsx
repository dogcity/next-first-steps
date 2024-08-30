import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About Title',
  description: 'About Description',
  keywords: ['About Page'],
}

const AboutPage = () => {
  return (
    <>
      <span className="text-7xl">About</span>
    </>
  )
}

export default AboutPage
