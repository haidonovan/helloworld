'use client'

import { useState } from "react";

const students = [
  "Alice", "Bob", "Charlie", "Diana", "Ethan",
  "Fiona", "George", "Hannah", "Ian", "Jane"
];

export default function StudentGrid() {
  const [selected, setSelected] = useState([]);

  const toggleStudent = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((s) => s !== name)
        : [...prev, name]
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Student Attendance</h2>
      <div className="grid grid-cols-5 gap-4">
        {students.map((student) => {
          const isSelected = selected.includes(student);
          return (
            <div
              key={student}
              onClick={() => toggleStudent(student)}
              className={`cursor-pointer rounded-lg p-4 text-center border
                ${isSelected ? "bg-blue-600 text-white border-blue-600" : "bg-white border-gray-300"}
                hover:bg-blue-100 hover:border-blue-400 transition`}
            >
              <div className="flex justify-center items-center space-x-2">
                <span>{student}</span>
                {isSelected && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
