import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

// Middleware function
export async function middleware(request: NextRequest) {
    
    const path = request.nextUrl.pathname;
    console.log("next secret",process.env.NEXTAUTH_SECRET)
    console.log("path",path)
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET }); // Get the token
    

    // Define public routes
    const isPublic = path === '/login' || path === '/signup';

    if (isPublic && token) {
        // Redirect authenticated users away from login/signup pages
        console.log("Authenticated user trying to access public route. Redirecting to '/'...");
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (!isPublic && !token) {
        // Redirect unauthenticated users to the login page for protected routes
        console.log("Unauthenticated user trying to access protected route. Redirecting to '/login'...");
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Allow the request to proceed if no redirection is needed
    return NextResponse.next();
}

// Configuration for matching routes
export const config = {
    matcher: [
        '/',             
        '/login',        
        '/signup',       
        '/home/tv-shows', 
        '/home/movies',   
    ],
};
