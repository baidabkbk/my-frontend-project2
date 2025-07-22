import Image from "next/image";

export default function Home() {
  const cards = [
    {
      title: "The Middle Child",
      description:
        "Given the information about the relationships among children's ages, can you identify the middle child?",
      image: "/img1.png",
      people: "5,333 people working on this",
    },
    {
      title: "Clingy Charges",
      description:
        "Outside of the lab, it's hard to see the effect of electric forces, but here's a quick and easy way to unlock their effects in your kitchen!",
      image: "/img2.png",
      people: "10,232 people working on this",
    },
    {
      title: "Making Necklaces",
      description:
        "Jaz makes necklaces by stringing two different colors of beads together. How many different patterns can she create?",
      image: "/img3.png",
      people: "7,380 people working on this",
    },
    {
      title: "What's the Difference?",
      description:
        "What’s the difference between these two angles?",
      image: "/img4.png",
      people: "9,547 people working on this",
    },
    {
      title: "Blank Spaces",
      description:
        "This puzzle has two clues to describe the locations of three pieces. Which spaces on the board will have to remain empty?",
      image: "/img4.png",
      people: "9,546 people working on this",
    },
    {
      title: "The Mysterious Age",
      description:
        "Some numbers have interesting relationships with their digits. Can you use the information provided to deduce Elijah's age?",
      image: "/img4.png",
      people: "11,938 people working on this",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Today</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Левая колонка с календарём */}
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-lg font-semibold mb-4">JULY 2025</h2>
            <div className="grid grid-cols-7 text-center text-gray-600 gap-y-2">
              <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
              {/* 1 неделя */}
              <div></div><div></div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
              {/* 2 неделя */}
              <div>6</div><div>7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div>
              {/* 3 неделя */}
              <div>13</div><div>14</div><div>15</div><div>16</div><div>17</div><div>18</div><div>19</div>
              {/* 4 неделя */}
              <div>20</div><div>21</div>
              <div className="rounded-full border border-orange-500 text-orange-500 font-bold">
                22
              </div>
              <div>23</div><div>24</div><div>25</div><div>26</div>
              {/* 5 неделя */}
              <div>27</div><div>28</div><div>29</div><div>30</div><div>31</div><div></div><div></div>
            </div>
          </div>

          {/* Правая колонка с карточками */}
          <div className="space-y-4">
            {cards.map((card, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex gap-4 items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={180}
                    height={120}
                    className="rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-sm uppercase text-gray-500">MATH AND LOGIC</h3>
                  <h2 className="text-lg font-semibold">{card.title}</h2>
                  <p className="text-sm text-gray-600">{card.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{card.people}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
