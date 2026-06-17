export default function Sidebar({
  showMenu,
  setShowMenu,

  categories,
  setSelectedCategory,
  setShowJobs,

  formData,




  activeSidebarSection,
  setActiveSidebarSection
}) {

  return (

    <div

      className={`fixed top-0 left-0 h-screen w-[70%] bg-white z-50 shadow-2xl transition-transform duration-300 overflow-hidden
    ${showMenu
          ? "translate-x-0"
          : "-translate-x-full"
        }`}
    >

      {/* SIDEBAR HEADER */}

      <div className="bg-yellow-400 p-4 sticky top-0 z-10">

        <h2 className="text-xl font-bold">
          Work Station
        </h2>

        <p className="text-xs">
          Find Your Dream Job
        </p>

      </div>

      {/* MENU ITEMS */}

      <div className="p-3 overflow-y-auto h-[calc(100vh-80px)] pb-20">

        {/* HOME */}

       <button
  onClick={() => {

    setSelectedCategory("All Jobs");

    setShowJobs(true);

    setShowMenu(false);

    setActiveSidebarSection("");

  }}
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
            setActiveSidebarSection(
              activeSidebarSection === "jobs"
                ? ""
                : "jobs"
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

            {activeSidebarSection === "jobs" ? "▲" : "▼"}
          </span>

        </button>


        {activeSidebarSection === "jobs" && (

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
            setActiveSidebarSection(
              activeSidebarSection === "profile"
                ? ""
                : "profile"
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

            {activeSidebarSection === "profile" ? "▲" : "▼"}
          </span>

        </button>


        {activeSidebarSection === "profile" && (

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
            setActiveSidebarSection(
              activeSidebarSection === "about"
                ? ""
                : "about"
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
            {activeSidebarSection === "about"
              ? "▲"
              : "▼"}
          </span>
        </button>


        {activeSidebarSection === "about" && (

          <div
            className="
      mt-2
      ml-4
      mr-2
      bg-gray-50
      border
      border-gray-200
      rounded-2xl
      p-4
      text-sm
      leading-relaxed
    "
          >

            <h3 className="text-lg font-bold mb-2">
              🚀 About Work Station
            </h3>

            <p>
              Work Station helps job seekers
              find jobs and apply easily.
              Companies can also post jobs
              and connect with candidates.
            </p>

            <p className="mt-3">
              Our goal is to make hiring
              faster, simpler, and more
              accessible for everyone.
            </p>

            <div className="mt-4">
              <h4 className="font-semibold">
                ✨ Features
              </h4>

              <ul className="list-disc ml-5 mt-1">
                <li>Browse jobs by category</li>
                <li>Quick job applications</li>
                <li>Company job posting</li>
                <li>User profile management</li>
                <li>Mobile-friendly design</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">
                👨‍💻 Developer
              </h4>

              <p>
                Developed by <strong>Tejas A N</strong>
              </p>

              <p>
                Full Stack Developer
              </p>

              <p>
                Passionate about creating
                practical web applications that
                solve real-world problems.
              </p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">
                📞 Contact
              </h4>
              <p>Phone No: 9591362918</p>
              <p>Email: tejastejas2818@gmail.com</p>
              <p>Website: Work Station</p>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Version 1.0 © 2026 Work Station.
              All Rights Reserved.
            </p>

          </div>

        )}

      </div>

    </div>

  );

}