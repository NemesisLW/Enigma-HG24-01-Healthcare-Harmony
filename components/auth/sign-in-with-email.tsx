import { userAuthSchema } from "@/lib/schemaValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

import * as z from "zod";

type FormData = z.infer<typeof userAuthSchema>;

export function SignInWithEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });

  const searchParams = useSearchParams();

  // TODO: Add Server Action Implementation of Sign in w/ email

  //       if (false) {
  // toast.error("Something went wrong.", {
  //     description: "Your sign in request failed. Please try again.",
  //   });

  //       return   toast.success("Check your email", {
  // description: "We sent you a login link. Be sure to check your spam too.",
  // });

  return (
    <form action={null}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            // disabled={isLoading || isGitHubLoading}
          />
        </div>
        <button className={cn(buttonVariants())} disabled={null}>
          {/* {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} */}
          Sign In with Email
        </button>
      </div>
    </form>
  );
}
