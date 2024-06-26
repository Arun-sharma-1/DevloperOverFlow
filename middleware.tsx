import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/webhooks",
    "question/:id",
    "/tags",  
    "/tags/:id",
    "/profile/:id",
    "/community",
    "/jobs",
  ],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
