import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Логотип через ссылку */}
        <Link href="/">
          <Image
            src="https://hpa.vc/wp-content/uploads/2016/05/Brilliant_Logo1.png"
            alt="Brilliant Logo"
            width={140}  // можно изменить ширину
            height={40}  // и высоту
            priority
          />
        </Link>

        {/* Навигация */}
        <nav className="flex items-center space-x-6 text-gray-700">
          <Link href="/">Today</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/practice">Practice</Link>
          <Link href="/login">Log in</Link>
          <Link
            href="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
}
