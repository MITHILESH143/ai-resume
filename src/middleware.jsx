import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {    
    const path = request.nextUrl.pathname;
    console.log('Middleware path:', path);
    const isPublicPath = path === ('/login') || path === ('/register');
    const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true';
    if(isPublicPath && isAuthenticated) {

        return NextResponse.redirect(new URL('/', request.url))
    } 
    if(!isPublicPath && !isAuthenticated) {

        return NextResponse.redirect(new URL('/login', request.url))
    } 

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/login', '/resume', '/interview'],
}