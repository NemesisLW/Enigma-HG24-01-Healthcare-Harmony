import { motion } from "framer-motion";

import { featureCardVariants } from "@/lib/animations/motions";

function FeaturesCard({ title, description }) {
  return (
    <motion.div
      variants={featureCardVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden rounded-lg border bg-background p-2 dark:border-slate-300"
    >
      <div className="flex h-[220px] flex-col justify-between rounded-md p-6">
        <div className="space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturesCard;
