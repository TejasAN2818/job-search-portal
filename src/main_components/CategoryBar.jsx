export default function CategoryBar({
  categories,
  selectedCategory,
  setSelectedCategory
}) {

  return (

    <div
      className="
        fixed
        top-[51px]
        left-0
        w-full
        z-40
        bg-yellow-50
        px-3
        py-2
        border-b
        border-yellow-100
        overflow-x-auto
        whitespace-nowrap
      "
    >

      <div className="flex gap-2">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category)
            }
            className={`
              px-4
              py-1.5
              rounded-xl
              text-sm
              font-medium
              transition-all

              ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700"
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