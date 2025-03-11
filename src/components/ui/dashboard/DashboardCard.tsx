
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  delay?: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend, 
  className,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: delay * 0.1,
        ease: [0.34, 1.56, 0.64, 1] // Custom spring-like easing
      }}
    >
      <div 
        className={cn(
          'glass-card p-6 h-full flex flex-col',
          className
        )}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            {icon}
          </div>
          {trend && (
            <div className={`flex items-center px-2.5 py-0.5 rounded-full text-xs ${
              trend.isPositive 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              <span className="mr-1">
                {trend.isPositive ? '↑' : '↓'}
              </span>
              {Math.abs(trend.value)}%
            </div>
          )}
        </div>
        
        <h3 className="text-sm font-medium text-muted-foreground">
          {title}
        </h3>
        
        <div className="mt-2 text-2xl font-semibold">
          {value}
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardCard;
