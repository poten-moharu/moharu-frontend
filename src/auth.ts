import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Kakao from 'next-auth/providers/kakao';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Kakao],
  pages: {
    signIn: '/auth/login/email',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ account, profile, user }) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/${account?.provider}/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: user?.email,
            name: user?.name,
            profileImage: user?.image,
            socialId: user?.id,
            socialType: account?.provider,
          }),
        },
      );
      const data = await response.json();

      // user.id = data.user.id;
      // user.email = data.user.email;
      // user.name = data.user.name;
      // user.profileImage = data.user.profileImage;
      // user.telephone = data.user.telephone;
      // user.mbti = data.user.mbti;
      // user.ageRange = data.user.age;
      // user.gender = data.user.gender;
      // user.region = data.user.region;
      // user.socialId = data.user.socialId;
      // user.socialType = data.user.socialType;
      user.accessToken = data.accessToken;
      return true;
    },
    async jwt({ token, user }) {
      if (token && user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
      const newSession = {
        id: token.sub,
        ...session,
      };

      return newSession;
    },
  },
});
