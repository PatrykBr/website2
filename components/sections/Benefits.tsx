import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: "🚀",
      title: "Unlimited AI Indicators",
      description: "Access all AI-powered indicators for every market condition."
    },
    {
      icon: "📈",
      title: "Advanced Market Analysis",
      description: "Get real-time insights and sentiment analysis for better decisions."
    },
    {
      icon: "🤖",
      title: "Full Automation",
      description: "Automate your trading strategies with low-latency execution."
    },
    {
      icon: "📞",
      title: "Priority Support",
      description: "Get 24/7 priority support from our expert team."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-500/10 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Premium?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-500">
              <div className="text-4xl mb-4 animate-bounce">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;