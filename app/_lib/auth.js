import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import connectDB from "../_config/database";
import User from "@/models/User";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ account, profile, user }) {
      try {
        await connectDB();
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          await User.create({
            email: user.email,
            firstName: user.name,
            image: user.image,
          });
        }
      } catch (error) {
        console.log(error);
      }
      return true;
    },
    async session({ session }) {
      await connectDB();
      const currentUser = await User.findOne({ email: session.user.email });
      session.user.id = currentUser._id.toString();
      return session;
    },
  },
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
};

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
