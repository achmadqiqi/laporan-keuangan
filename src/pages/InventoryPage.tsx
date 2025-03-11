
import React from 'react';
import PageTransition from '@/components/layout/PageTransition';
import { motion } from 'framer-motion';

const InventoryPage = () => {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tight">Inventory Module</h1>
            <p className="text-muted-foreground mt-1">
              Manage your inventory items, stock levels, and adjustments
            </p>
          </motion.div>
        </div>
        
        <div className="grid place-items-center h-[50vh]">
          <div className="text-center p-8">
            <h2 className="text-2xl font-semibold mb-4">This page is under construction</h2>
            <p className="text-muted-foreground">
              The Inventory module is coming soon. Check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default InventoryPage;
