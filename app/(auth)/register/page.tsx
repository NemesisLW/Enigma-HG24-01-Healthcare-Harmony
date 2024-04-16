import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { LifeBuoy } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FormSkeleton } from "@/components/skeletons/form-skeleton";
import { UserAuthForm } from "@/components/auth/user-auth-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900 " />
        <div className="relative z-20 items-center text-lg font-medium">
          <Link href="/" className="flex">
            <LifeBuoy className="mr-2 h-6 w-6" />
            Clarity
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg italic">
              &ldquo;What is hell? I maintain that it is the suffering of being
              unable to love. &rdquo;
            </p>
            <footer className="text-sm">
              Fyodor Dostoevsky, The Brothers Karamazov
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <Suspense fallback={<FormSkeleton />}>
            <UserAuthForm />
          </Suspense>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
          {/* <p className="px-8 text-center text-xs text-muted-foreground">
              <RegisterLink className="hover:text-brand underline underline-offset-4">
                Grandpa, Sign up with Password
              </RegisterLink>
            </p> */}
        </div>
      </div>
    </div>
  );
}
