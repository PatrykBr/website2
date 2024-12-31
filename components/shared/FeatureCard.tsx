'use client';

import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ transform }}
      className="group relative flex flex-col items-center space-y-4 p-8 rounded-2xl border border-white/10 hover:border-emerald-500/20 backdrop-blur-md bg-white/5 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 group-hover:from-emerald-500/20 group-hover:to-blue-500/20 transition-all duration-500">
        <Icon className="h-8 w-8 text-emerald-500" />
      </div>
      <h3 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-500">
        {title}
      </h3>
      <div className="h-px w-16 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0" />
      <p className="text-sm text-gray-500 text-center font-medium">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;