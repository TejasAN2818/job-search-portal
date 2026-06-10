export default function Sidebar({
  showMenu,
  setShowMenu,
  showJobCategories,
  setShowJobCategories,
  categories,
  setSelectedCategory,
  setShowJobs,
  showProfile,
  setShowProfile,
  formData,
  showAbout,
  setShowAbout
}) {

  return (

    <div
      className={`fixed top-0 left-0 h-screen w-[70%] bg-white z-50 shadow-2xl transition-transform duration-300
        ${
          showMenu
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
    >

      {/* SIDEBAR HEADER */}

      <div className="bg-yellow-400 p-4">

        <h2 className="text-xl font-bold">
          Work Station
        </h2>

        <p className="text-xs">
          Find Your Dream Job
        </p>

      </div>

      {/* MENU ITEMS */}

      <div className="p-3">

        {/* HOME */}

        <button
          className="
            w-full
            text-left
            px-4
            py-3
            rounded-xl
            hover:bg-gray-100
          "
        >
          🏠 Home
        </button>

        {/* JOBS */}

        <button
          onClick={() =>
            setShowJobCategories(
              !showJobCategories
            )
          }
          className="
            w-full
            text-left
            px-4
            py-3
            rounded-xl
            hover:bg-gray-100
            flex
            items-center
            justify-between
          "
        >

          <span>💼 Jobs</span>

          <span>
            {showJobCategories ? "▲" : "▼"}
          </span>

        </button>

        {showJobCategories && (

          <div className="ml-4 mt-1 flex flex-col gap-1">

            {categories
              .filter(
                (category) =>
                  category !== "All Jobs"
              )
              .map((category) => (

                <button
                  key={category}
                  onClick={() => {

                    setSelectedCategory(
                      category
                    );

                    setShowJobs(true);

                    setShowMenu(false);

                  }}
                  className="
                    text-left
                    px-4
                    py-2
                    rounded-lg
                    text-sm
                    bg-gray-100
                    hover:bg-gray-200
                  "
                >

                  {category}

                </button>

              ))}

          </div>

        )}

        {/* PROFILE */}

        <button
          onClick={() =>
            setShowProfile(
              !showProfile
            )
          }
          className="
            w-full
            text-left
            px-4
            py-3
            rounded-xl
            hover:bg-gray-100
            flex
            items-center
            justify-between
          "
        >

          <span>👤 Profile</span>

          <span>
            {showProfile ? "▲" : "▼"}
          </span>

        </button>

        {showProfile && (

          <div
            className="
              mt-2
              ml-4
              mr-2
              bg-gray-50
              border
              border-gray-200
              rounded-2xl
              p-3
              text-sm
            "
          >

            <p>
              <strong>Name:</strong> {formData.name}
            </p>

            <p>
              <strong>Phone:</strong> {formData.phone_No}
            </p>

            <p>
              <strong>Role:</strong> {formData.designation}
            </p>

            <p>
              <strong>Location:</strong> {formData.location}
            </p>

            <p>
              <strong>Gender:</strong> {formData.gender}
            </p>

          </div>

        )}

        {/* ABOUT */}

        <button
          onClick={() =>
            setShowAbout(
              !showAbout
            )
          }
          className="
            w-full
            text-left
            px-4
            py-3
            rounded-xl
            hover:bg-gray-100
            flex
            items-center
            justify-between
          "
        >

          <span>ℹ️ About</span>

          <span>
            {showAbout ? "▲" : "▼"}
          </span>

        </button>

      </div>

    </div>

  );

}