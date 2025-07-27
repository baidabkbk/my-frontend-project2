import Link from "next/link";
import Image from "next/image";

export default function CoursesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Сотрудники</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <Link href="/courses/employee1">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition">
            <Image
              src="/employees/employee1.png"
              alt="Сотрудник 1"
              width={300}
              height={200}
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-bold">Сотрудник 1</h2>
            <p className="text-gray-600">QA Engineer</p>
          </div>
        </Link>

        <Link href="/courses/employee2">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition">
            <Image
              src="/employees/employee2.png"
              alt="Сотрудник 2"
              width={300}
              height={200}
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-bold">Сотрудник 2</h2>
            <p className="text-gray-600">Frontend Developer</p>
          </div>
        </Link>

        <Link href="/courses/employee3">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition">
            <Image
              src="/employees/employee3.png"
              alt="Сотрудник 3"
              width={300}
              height={200}
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-bold">Сотрудник 3</h2>
            <p className="text-gray-600">Backend Developer</p>
          </div>
        </Link>

        <Link href="/courses/employee4">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition">
            <Image
              src="/employees/employee4.png"
              alt="Сотрудник 4"
              width={300}
              height={200}
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-bold">Сотрудник 4</h2>
            <p className="text-gray-600">DevOps</p>
          </div>
        </Link>

      </div>
    </div>
  );
}
