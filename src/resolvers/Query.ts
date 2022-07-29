import { Context } from "..";

export const Query = {
  me: (_: any, __: any, { userInfo, prisma }: Context) => {
    if (!userInfo) {
      return null;
    }
    return prisma.user.findUnique({
      where: {
        id: userInfo.userId,
      },
    });
  },

  profile: (_: any, { userId }: { userId: string }, { prisma }: Context) => {
    return prisma.profile.findUnique({
      where: { userId: Number(userId) },
    });
  },

  posts: async (_: any, __: any, { prisma }: Context) => {
    const posts = await prisma.post.findMany({
      where: {
        published: true,
      },
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
    });
    return posts;
  },
};
