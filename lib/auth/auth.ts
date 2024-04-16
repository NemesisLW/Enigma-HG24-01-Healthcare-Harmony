import NextAuth, { type Session, type User } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import db from "../db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [GitHub, Google, Resend],
  pages: {
    signIn: "/login",
    newUser: "/dashboard", // can be directed to create-patient-form
  },
  callbacks: {
    session({
      session,
      token,
      user,
    }: {
      session: Session;
      token?: any;
      user?: User;
    }) {
      if (user) {
        session.user.id = user.id!;
      }
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      return true;
    },
  },
  cookies: {
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
  },
});
