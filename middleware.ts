import { auth } from "@/auth";


export default auth((req) => {
    const protectedRoutes = ["/photos"];

    if (protectedRoutes.some((route) => req.url.includes(route))) {
        if (!req.auth) {
            return Response.redirect(new URL("/", req.url));
        }
    }

});

export const config = {
    matcher: ["/photos/:path*"],
};