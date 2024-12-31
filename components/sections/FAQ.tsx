import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What's included in the Premium plan that's not in Free?",
      answer: "Premium unlocks unlimited professional indicators (vs. 3 in Free), AI-powered trade analysis, real-time alerts across all markets, enterprise-grade automation, 24/7 priority support, and advanced risk management tools."
    },
    {
      question: "How accurate are the trading signals?",
      answer: "Our indicators combine proven technical analysis with advanced machine learning, achieving 70-80% accuracy in typical market conditions."
    },
    {
      question: "Can I cancel my Premium subscription anytime?",
      answer: "Yes, you can cancel your Premium subscription anytime with no questions asked. You'll retain access to Premium features until the end of your billing period."
    },
    {
      question: "Can I use the automation features with my existing broker?",
      answer: "Yes, we support major brokers including Oanda, Bybit, and Tradovate through secure API integrations."
    },
    {
      question: "What markets are supported?",
      answer: "We support a comprehensive range of markets including cryptocurrencies, stocks, futures, forex, and commodities."
    },
    {
      question: "How long does it take to see results?",
      answer: "Many of our Premium users report significant improvements within their first month."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 rounded-lg border border-white/10 bg-gradient-to-b from-emerald-500/5 to-transparent">
              <h3 className="font-bold">{faq.question}</h3>
              <p className="text-gray-500 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;