export default function Courses() {
  const courses = [
    {
      title: "Logic",
      description: "Stretch your analytic muscles with knights, knaves, logic gates, and more!",
      image: "/img1.png",
    },
    {
      title: "Computer Science Fundamentals",
      description: "Wrap your mind around computational thinking, from everyday tasks to algorithms.",
      image: "/img2.png",
    },
    {
      title: "Introduction to Neural Networks",
      description: "Learn why neural networks are such flexible tools for learning.",
      image: "/img3.png",
    },
    {
      title: "Mathematical Fundamentals",
      description: "The essential tools for mastering algebra, logic, and number theory!",
      image: "/img4.png",
    },
  ];

  return (
    <div className="px-10 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-2">Popular Courses ✨</h1>
      <p className="text-gray-500 mb-8">Popular with our users in the last month</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
          >
            <img src={course.image} alt={course.title} className="rounded-md mb-4" />
            <h2 className="font-semibold text-lg">{course.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
