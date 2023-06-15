/**
 * Middleware:
 * - Chạy các đoạn mã tùy chỉnh với mỗi request đến, cho phép chỉnh sửa các thông tin trong request, chuyển hướng (redirect) hay gửi phản hồi trực tiếp
 * - Middleware chạy trước khi nội dung được lưu vào bộ nhớ cache và trước khi khớp với route
 *
 * Cách sử dụng:
 * - Tạo file middleware (.ts, .js) ở thư mục cao nhất của dự án
 * - Export function middleware (có thể sử dụng async/await)
 * - Mặc định middleare sẽ được gọi với mọi route, có thể tùy chỉnh middleware sẽ chạy với route nào bằng cách thêm cấu hình matcher hoặc câu lệnh điều kiện để so khớp url
 */

/**
 * NextResponse
 * - Chuyển hướng request
 * - Thêm các headers tùy chỉnh cho request
 * - Thiết lập cookie cho response
 * - Thiết lập tiêu đề cho response
 * - Trả về response trực tiếp
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    /**
     * Cookie
     * - Là một giá trị header
     * - Trong Request, cookie được lưu trong trường `Cookie`
     * - Trong Response, cookie được lưu trong trường `Set-Cookie`
     * - Next.js cung cấp api `cookies` để làm việc trực tiếp với cookies
     * - Các phương thức chung như get, getAll, set, delete
     * - Check cookie bằng has, hay xóa toàn bộ bằng clear
     */
    const authCookie = request.cookies.get("X-Author");
    const allCookies = request.cookies.getAll();

    console.log(allCookies);

    // Tạo response chuyển tiếp
    const response = NextResponse
        .next
        // Tùy chỉnh cho rewrite
        //   request: {
        //       // extendRequestHeaders
        //       headers: extendRequestHeaders
        //   }
        ();

    response.cookies.set("X-Author", "Ba Nguyễn");
    response.cookies.set({
        name: "X-Power-By",
        value: "Next.js",
        path: "/",
    });

    /**
     * Headers
     * - Tùy chỉnh headers cho requests và cả response
     */

    // Clone và thêm header tùy chỉnh
    const extendRequestHeaders = new Headers(request.headers);
    extendRequestHeaders.set("X-Request-Time", new Date().toLocaleString());

    // Thêm header cho response
    response.headers.set("X-Author-Email", "banx9x@gmail.com");

    // Trả về phản hồi trực tiếp
    const logicCondition = false;

    if (logicCondition) {
        return new NextResponse(
            JSON.stringify({
                message: "Hello from Middleware",
            })
        );
    }

    // Chuyển tiếp request
    return response;
}

/**
 * Config matcher
 * - Phải là một giá trị (chuỗi) cụ thể
 * - Bắt đầu bằng /
 * - Có thể bao gồm tham số đường dẫn
 * - Có thể là biểu thức regex
 * - Có thể bao gồm trình chỉnh sửa theo sau tham số, ví dụ :path*
 */
export const config = {
    // Chỉ chạy khi request.url là /about/*
    // matcher: "/about/:path*",
    // Khớp với nhiều routes khác nhau
    // matcher: ["/about/:path*", "/dashboard/:path*"]
    // Biểu thức regex
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    // matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
