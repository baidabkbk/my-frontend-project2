export default function PracticePage() {
  const sections = [
    "Algebra",
    "Geometry",
    "Number Theory",
    "Calculus",
    "Probability",
    "Computer Science",
    "Logic",
    "Chemistry",
  ];

  const practiceData = [
    {
      title: "Algebra",
      courses: [
        {
          name: "Algebra I",
          topics: [
            "Introduction",
            "Equations and Unknowns",
            "Manipulating Exponents",
            "Algebra in Motion",
            "Factorials",
            "Common Misconceptions",
          ],
        },
        {
          name: "Algebra II",
          topics: [
            "Introduction",
            "Function Fundamentals",
            "Transformations",
            "Powers and Radicals",
            "Polynomials",
            "Factoring Polynomials",
            "Rational Functions",
            "Piecewise Functions",
          ],
        },
      ],
    },
    {
      title: "Geometry",
      courses: [
        {
          name: "Geometry Fundamentals",
          topics: [
            "Introduction",
            "Angles and Lengths",
            "Area",
            "Pythagoras' Geometry",
            "Scaling and Volume",
          ],
        },
        {
          name: "Beautiful Geometry",
          topics: [
            "Introduction",
            "Tessellations and Reptiles",
            "Polyominos",
            "Folding Puzzles",
            "Guarding Galleries",
            "Pick's Theorem",
          ],
        },
      ],
    },
    {
      title: "Number Theory",
      courses: [
        {
          name: "Number Theory",
          topics: [
            "Introduction",
            "Factorization",
            "GCD and LCM",
            "Modular Arithmetic I",
            "Modular Arithmetic II",
            "Exploring Infinity",
          ],
        },
        {
          name: "Number Bases",
          topics: [
            "Introduction",
            "Binary and Other Bases",
            "Digits and Divisibility",
            "Decimal Expansions in Base 10",
            "Divisibility in Other Bases",
          ],
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex">
      {/* Sidebar */}
      <aside className="w-1/4 pr-8">
        <h2 className="text-xl font-bold mb-4">Practice</h2>
        <ul className="space-y-2 text-gray-800">
          {sections.map((item) => (
            <li
              key={item}
              className="hover:text-blue-600 cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4">
        {practiceData.map((section) => (
          <div key={section.title} className="mb-12">
            <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
            <p className="text-gray-600 mb-4">
              Take a guided, problem-solving based approach to learning{" "}
              {section.title}. These compilations provide unique perspectives and
              applications you won’t find anywhere else.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {section.courses.map((course) => (
                <div
                  key={course.name}
                  className="bg-blue-100 rounded-lg shadow-md p-4 border"
                >
                  <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    {course.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
