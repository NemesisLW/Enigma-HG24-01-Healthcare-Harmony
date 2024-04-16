"use client";
import { HoverBorderGradient } from "@/components/animated-ui/hover-border-gradient";
import { motion, useScroll, useTransform } from "framer-motion";
import Features from "@/components/sections/features";
import { buttonVariants } from "@/components/ui/button";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// test


export default function Home() {

  const ref = useRef<HTMLImageElement>(null);
  const ref_fadein = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1.3 1", "2.33 1"]

  });
  

  const moveright = useTransform(scrollYProgress, [0, 1], [240, 540]);
  const moveleft = useTransform(scrollYProgress, [0, 1], [48, -300]);
  const hide = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const hide_fast = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>

      <motion.div
        ref={ref}
        style={
          {
            opacity: hide_fast,
            x: moveleft,
          }
        }
        className="bg_img_dark dark:bg-black bg-slate-50"
      >      </motion.div>
      <motion.div
        ref={ref}
        style={
          {
            opacity: hide_fast,
            x: moveleft,
          }
        }
        className="bg_img_dark_left dark:bg-black bg-slate-50"
      >      </motion.div>
      <motion.img
        ref={ref}
        style={
          {
            opacity: hide_fast,
            x: moveleft,
            y: -128,
          }
        }
        src="/AdobeStock_324213949_Preview.svg"
        width={1700}
        height={1000}
        alt="Authentication"
        className="block dark:hidden fixed overflow-x-hidden main_bg -translate-y-32 -z-100 translate-x-12"
      ></motion.img>
      <motion.img
        ref={ref}
        style={
          {
            opacity: hide_fast,
            x: moveleft,
            y: -128,
          }
        }
        src="/AdobeStock_324213949_Preview_dark.svg"
        width={1700}
        height={1000}
        alt="Authentication"
        className="hidden dark:block fixed overflow-x-hidden main_bg -translate-y-32 -z-100 translate-x-12"
      ></motion.img>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div
          className=" absolute inset-x-0 top-28 z-10 transform-gpu overflow-hidden blur-3xl mt-64 pt-64"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5cb6fc] to-[hsl(64,100%,72%)] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] "
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%,80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%,17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* Vector & Hero div*/}
        <motion.div className="flex mb-56 fixed translate-x-96"
          ref={ref}
          style={
            {
              opacity: hide,
              x: moveright,
            }
          }
        >
          <section className="flex justify-center">

          </section>
          <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-12">
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
              <Link href="/therapy-sessions" target="_blank">
                <HoverBorderGradient
                  containerClassName="rounded-2xl fade_anm delay_0"
                  className="bg-muted px-4 py-1.5 text-sm font-medium text-slate-900 dark:text-white"
                >
                  call to action
                </HoverBorderGradient>
              </Link>

              <h1 className="font-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl fade_anm delay_1">

                Swasthya Hub
              </h1>

              <div className="max-w-[42rem] italic leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                <p className="fade_anm delay_2">
                  <b className=" not-italic ">
                    Empowering Your Mind, Elevating Your Life
                  </b>

                </p>
                <br />
                <p className="fade_anm delay_3">

                  Empower your mind and transform your life with Clarity. Embrace
                  the possibilities and embark on a journey of self-growth today!
                </p>
              </div>
              <div className="space-x-4 fade_anm delay_4">
                <Link
                  href="/dashboard"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </section>
        </motion.div>

        <Features />
        <div
          className="mt-96 pt-96 absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#2563EB] to-[#dccca3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] "
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%,17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <section id="open-source" className="container py-2 md:py-6 lg:py-8">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-8 text-center">
            <h2 className="font-title text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Text
            </h2>
          </div>
        </section>
        <div
          className="mt-64 pt-64 absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#2563EB] to-[#dccca3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] "
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%,17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </main>

    </>

  );
}
