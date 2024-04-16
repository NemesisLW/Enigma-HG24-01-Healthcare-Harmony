import { cn } from "@/lib/utils";
import { signIn } from "auth";
import { buttonVariants } from "../ui/button";
import { Icons } from "@/lib/icon";

// TODO: handle loading state like mh-x codebase
export function SignInWithGithub() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className={cn(buttonVariants({ variant: "outline" }), "w-full")}
      >
        <Icons.gitHub className="mr-2 h-4 w-4" />
        GitHub
      </button>
    </form>
  );
}

export function SignInWithGoogle() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className={cn(buttonVariants({ variant: "outline" }), "w-full")}
      >
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </button>
    </form>
  );
}

export function SignInWithEmail() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("resend", formData);
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <button type="submit">Signin with Resend</button>
    </form>
  );
}
