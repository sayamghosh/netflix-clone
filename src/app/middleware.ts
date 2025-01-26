import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

// Middleware function
export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    const path = request.nextUrl.pathname;

    // Define public routes
    const isPublic = path === '/login' || path === '/signup';

    if (isPublic && token) {
        // Redirect authenticated users away from login/signup pages
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (!isPublic && !token) {
        // Redirect unauthenticated users to the login page for protected routes
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Allow the request to proceed if no conditions are met
    return NextResponse.next();
}

// Configuration for matching routes
export const config = {
    matcher: [
        '/',             // Home
        '/login',        // Login page
        '/signup',       // Signup page
        '/home/tv-shows', // Example protected route
        '/home/movies',   // Another protected route
    ],
};
