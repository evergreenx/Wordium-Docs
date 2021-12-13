import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"

import { FirebaseAdapter } from "@next-auth/firebase-adapter"

import GoogleProvider from "next-auth/providers/google"
import {db} from "../../../firebase"
export default NextAuth({
  // Configure one or more authentication providers
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],

  adapter : FirebaseAdapter(db)
})