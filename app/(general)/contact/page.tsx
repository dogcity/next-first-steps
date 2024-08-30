import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact Title',
  description: 'Contact Description',
  keywords: ['Contact Page'],
}

const ContactPage = () => {
  return (
    <>
      <span className="text-7xl">Contact</span>
    </>
  )
}

export default ContactPage
