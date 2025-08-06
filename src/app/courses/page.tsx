"use client";

import { useState } from "react";
import Image from "next/image";
import employees from "./employees.json";

export default function CoursesPage() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleOpenModal = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleCloseModal = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Сотрудники</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition"
            onClick={() => handleOpenModal(employee)}
          >
            <Image
              src={employee.image}
              alt={employee.name}
              width={300}
              height={200}
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-bold">{employee.name}</h2>
            <p className="text-gray-600">{employee.position}</p>
          </div>
        ))}
      </div>

      {selectedEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>

            <Image
              src={selectedEmployee.image}
              alt={selectedEmployee.name}
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />

            <h2 className="text-2xl font-bold mb-2">{selectedEmployee.name}</h2>
            <p className="text-gray-700 mb-1">
              <strong>Позиция:</strong> {selectedEmployee.position}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Где родился:</strong> {selectedEmployee.birthPlace}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Где учился:</strong> {selectedEmployee.education}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Семья:</strong> {selectedEmployee.family}
            </p>
            <p className="text-gray-700">
              <strong>О себе:</strong> {selectedEmployee.about}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
