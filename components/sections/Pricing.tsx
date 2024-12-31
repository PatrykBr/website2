import React from 'react';
import PricingCard from '../shared/PricingCard';

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: 29,
      features: [
        "3 AI Indicators",
        "Basic Market Analysis",
        "Email Support",
        "Limited Automation"
      ],
      cta: "Get Started",
      priceId: "price_1P8z3t2eZvKYlo2C3YJY7X2H" // Replace with your Stripe price ID
    },
    {
      title: "Premium",
      price: 99,
      features: [
        "Unlimited AI Indicators",
        "Advanced Market Analysis",
        "Priority Support",
        "Full Automation"
      ],
      cta: "Go Premium",
      priceId: "price_1P8z3t2eZvKYlo2C3YJY7X2H", // Replace with your Stripe price ID
      isPopular: true, // Highlight the premium package
      discount: "Save 20%", // Add a discount
      limitedTime: "Offer ends in 2 days" // Add scarcity
    },
    {
      title: "Enterprise",
      price: 299,
      features: [
        "Custom AI Models",
        "Dedicated Account Manager",
        "24/7 Support",
        "Multi-Exchange Integration"
      ],
      cta: "Contact Us",
      priceId: "price_1P8z3t2eZvKYlo2C3YJY7X2H" // Replace with your Stripe price ID
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-500/10 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;