"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations/motions";
import FeaturesCard from "@/components/cards/FeaturesCard";
import { FeaturesList } from "@/lib/config/site";

function Features() {
  return (
    <section
      id="features"
      className="container space-y-6 py-4 font-title dark:bg-transparent md:py-6 lg:py-12"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Features
          </h2>
          <p className="max-w-[85%] pb-4 leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Features-tagline
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {FeaturesList.map((feature, index) => (
            <FeaturesCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </motion.div>
      <div className="mx-auto text-center md:max-w-[58rem]">
        <p className="pt-4 leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Lorem
        </p>
      </div>
    </section>
  );
}

export default Features;
