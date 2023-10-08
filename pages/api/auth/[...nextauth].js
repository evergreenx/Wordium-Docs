import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github"
// import Providers from "next-auth/providers";
import { FirestoreAdapter } from "@auth/firebase-adapter"
import GoogleProvider from "next-auth/providers/google"
import { db } from "../../../firebase";
export default NextAuth({
  // Configure one or more authentication providers

  providers: [
    GoogleProvider({
      clientId: '526376722562-3onvq3rf5um7ham9l6vmjma4daod90bj.apps.googleusercontent.com',
      clientSecret: 'p9yL4VP63PcdF_HiGqOryoNB',
    }),
  ],

  // adapter: FirestoreAdapter(db),
});
