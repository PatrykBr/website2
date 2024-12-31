'use client';

import { useState } from 'react';
import { LineChart, BookOpen, Bot } from 'lucide-react';

const DetailedFeatures = () => {
  const [activeTab, setActiveTab] = useState('indicators');

  const features = [
    {
      id: "indicators",
      icon: LineChart,
      title: "Smart Indicators",
      tagline: "AI-Powered Analysis",
      description: "Experience next-generation trading signals powered by advanced machine learning algorithms and real-time market analysis",
      benefits: [
        "AI-powered pattern recognition across multiple timeframes",
        "Advanced filtering system to eliminate false signals",
        "Real-time market sentiment analysis integration",
        "Custom alert builder with multi-condition support",
        "Historical backtesting with detailed performance metrics",
        "Seamless TradingView chart integration"
      ],
      image: "https://images.unsplash.com/photo-1651340981821-b519ad14da7c?q=80&w=2070?auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: "journal",
      icon: BookOpen,
      title: "Trading Journal",
      tagline: "Performance Tracking",
      description: "Transform your trading with our AI-enhanced journal that automatically identifies patterns and provides actionable insights",
      benefits: [
        "AI-powered trade pattern analysis",
        "Automated performance tracking and metrics",
        "Emotional state correlation with trade outcomes",
        "Advanced risk management analytics",
        "Custom tagging system with smart suggestions",
        "Visual trade replay and analysis"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: "automation",
      icon: Bot,
      title: "Trade Automation",
      tagline: "Strategy Automation",
      description: "Deploy sophisticated trading strategies with our enterprise-grade automation platform built for reliability and performance",
      benefits: [
        "Low-latency execution engine",
        "Multi-exchange portfolio management",
        "Dynamic position sizing algorithms",
        "Advanced risk management rules",
        "Real-time performance monitoring",
        "Customizable strategy builder"
      ],
      image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=2000&q=80"
    }
  ];

  const activeFeature = features.find((feature) => feature.id === activeTab);

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-500/10 to-transparent relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 animate-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="flex justify-center space-x-4 mb-8">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`px-6 py-2 rounded-lg ${
                activeTab === feature.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-emerald-500/10 text-gray-500 hover:bg-emerald-500/20'
              } transition-colors`}
            >
              {feature.title}
            </button>
          ))}
        </div>
        {activeFeature && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">{activeFeature.title}</h3>
              <p className="text-gray-500 mt-4">{activeFeature.description}</p>
              <ul className="mt-6 space-y-2">
                {activeFeature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-emerald-500 mr-2">✔</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src={activeFeature.image} alt={activeFeature.title} className="rounded-lg" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DetailedFeatures;