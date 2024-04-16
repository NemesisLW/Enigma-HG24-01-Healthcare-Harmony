"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef,useState } from "react";
import { featureCardVariants } from "@/lib/animations/motions";

function FeaturesCard({index, title, description }) {
  // const index=key;
  const ref =useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.7 1", "1.5 1"]
    
  });

  const fade_in_anm ={
    initial:{
      opacity:0,
      y:50,
    },
    animate: (index)=>({
      opacity:1,
      y:0,
      transition:{
        duration:0.5,
        delay: 0.05*index,
      },
    })
  }
  
  const orgProgress = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (

    <motion.div
    

      variants={fade_in_anm}
      initial="initial"
      whileInView="animate"
      custom={index}
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
