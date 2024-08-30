import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Pricing Title',
  description: 'Pricing Description',
  keywords: ['Pricing Page'],
}

const PricingPage = () => {
  return (
    <>
      <span className="text-7xl">Pricing</span>
    </>
  )
}

export default PricingPage
