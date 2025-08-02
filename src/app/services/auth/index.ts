import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

export const {
    handlers: {GET, POST },
    auth, handlers, signIn, signOut,
} =  NextAuth({
    providers: [Github],
})