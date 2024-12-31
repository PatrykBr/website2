import React from 'react';

const Comparison = () => {
  const features = [
    {
      feature: "AI-Powered Indicators",
      starter: "3",
      premium: "Unlimited",
      enterprise: "Custom"
    },
    {
      feature: "Advanced Market Analysis",
      starter: "Basic",
      premium: "Advanced",
      enterprise: "Enterprise-Grade"
    },
    {
      feature: "Automation",
      starter: "Limited",
      premium: "Full",
      enterprise: "Custom"
    },
    {
      feature: "Support",
      starter: "Email",
      premium: "Priority",
      enterprise: "24/7 Dedicated"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-500/10 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Plan Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4">Starter</th>
                <th className="p-4">Premium</th>
                <th className="p-4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, index) => (
                <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-4">{row.feature}</td>
                  <td className="p-4">{row.starter}</td>
                  <td className="p-4 font-bold text-emerald-500">{row.premium}</td>
                  <td className="p-4">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;