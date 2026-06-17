import { useRef } from "react";

export default function CategoryBar({
  categories,
  selectedCategory,
  setSelectedCategory
}) {

  const scrollRef = useRef(null);

  const handleCategorySelect = (
    category
  ) => {

    setSelectedCategory(
      category
    );

    if (
      category === "All Jobs" &&
      scrollRef.current
    ) {

      scrollRef.current.scrollTo({
        left: 0,
        behavior: "smooth"
      });

    }

  };

  return (

    <div
      className="
        fixed
        top-[51px]
        left-0
        w-full
        z-40
        bg-white/95
        backdrop-blur-md
        pt-3
        px-2
        py-2
        border-b
        border-gray-200
        shadow-sm
        flex
        items-center
        gap-2
      "
    >

      {/* ALL JOBS BUTTON */}

      <button
        onClick={() =>
          handleCategorySelect(
            "All Jobs"
          )
        }
        className={`
          px-3
          py-1.5
          rounded-full
          text-xs
          font-medium
          shrink-0
          transition-all
          duration-300
          hover:scale-105
          active:scale-95
          ${
            selectedCategory ===
            "All Jobs"
              ? "bg-black text-white shadow-md scale-105"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }
        `}
      >

        🔥 All Jobs

      </button>

      {/* SCROLLABLE CATEGORY PILLS */}

      <div
        ref={scrollRef}
        className="
          flex
          gap-2
          overflow-x-auto
          whitespace-nowrap
          flex-1
          scrollbar-hide
          scroll-smooth
        "
      >

        {categories
          .filter(
            (category) =>
              category !==
              "All Jobs"
          )
          .map((category) => (

            <button
              key={category}
              onClick={() =>
                handleCategorySelect(
                  category
                )
              }
              className={`
                px-3
                py-1.5
                rounded-full
                text-xs
                font-medium
                shrink-0
                transition-all
                duration-300
                hover:scale-105
                active:scale-95
                ${
                  selectedCategory ===
                  category
                    ? "bg-black text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
            >

              {category}

            </button>

          ))}

      </div>

    </div>

  );

}