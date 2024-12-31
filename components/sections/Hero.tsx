'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, BarChart, Zap } from 'lucide-react';
import FeatureCard from '../shared/FeatureCard';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const features = [
    {
      icon: TrendingUp,
      title: "85% Win Rate Signals",
      description: "AI-powered indicators with 85% accuracy across all market conditions"
    },
    {
      icon: BarChart,
      title: "Instant Market Analysis",
      description: "Advanced pattern recognition with sentiment analysis"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Execution",
      description: "Lightning-fast execution with enterprise-grade reliability"
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-emerald-500/10 to-transparent overflow-hidden h-screen flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 animate-gradient" />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl animate-float-delay-1" />
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-violet-500/10 rounded-full blur-xl animate-float-delay-2" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 max-w-4xl mx-auto"
        >
          Enterprise Trading Platform
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
            Powered by AI
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl text-gray-500 max-w-2xl mx-auto mt-6"
        >
          Advanced trading indicators, real-time market analysis, and enterprise-grade automation. Join over 10,000 professional traders using our AI-powered platform.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;