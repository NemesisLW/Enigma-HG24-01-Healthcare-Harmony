"use client";
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations/motions";
import FeaturesCard from "@/components/cards/FeaturesCard";
import { FeaturesList } from "@/lib/config/site";

function Features() {
  const feature_ref = useRef(null);

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


  return (
    <section
      id="features"
      className=" container space-y-6 py-4 font-title dark:bg-transparent md:py-6 lg:py-12 feature"
    >
      <div
        // variants={staggerContainer}
      >
        <div

          className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <motion.div
            variants={fade_in_anm}
            initial="initial"
            whileInView="animate"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Features
          </motion.div>
          <motion.div
            variants={fade_in_anm}
            initial="initial"
            whileInView="animate"
            className="max-w-[85%] pb-4 leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Features-tagline
          </motion.div>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {FeaturesList.map((feature, index) => (
            

              <FeaturesCard
              key={index.toString()}
              title={feature.title}
              description={feature.description}
              index={index}
              />

          ))}
        </div>
      </div>
      <div className="mx-auto text-center md:max-w-[58rem]">
        <p className="pt-4 leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Lorem
        </p>
      </div>
    </section>
  );
}

export default Features;
