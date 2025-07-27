"use client";

import Link from "next/link";
import Image from "next/image";

export default function Employee1() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Сотрудник 1</h1>

      {/* Фото сотрудника */}
      <div className="flex justify-center mb-4">
        <Image
          src="/employees/employee1.png"
          alt="Фото сотрудника 1"
          width={200}
          height={200}
          className="rounded-full shadow-md object-cover"
        />
      </div>

      <p className="text-gray-700 mb-2">
        <strong>Позиция:</strong> QA Engineer
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Где родился:</strong> Алматы, Казахстан
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Где учился:</strong> Международный IT-университет
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Семья:</strong> 4 человека, не женат
      </p>
      <p className="text-gray-700 mb-6">
        <strong>О себе:</strong> Опытный QA-инженер с навыками автоматизации тестирования и знанием JavaScript.
      </p>

      {/* Кнопка Назад */}
      <Link href="/courses">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Назад к списку
        </button>
      </Link>
    </div>
  );
}
