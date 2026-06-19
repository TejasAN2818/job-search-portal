import {
  User,
  Pencil
} from "lucide-react";

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

    <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 p-2 sticky top-0 z-10 shadow-md">

  <div className="flex items-center justify-between">

    <div className="flex items-center gap-3">

      {/* Profile Avatar */}

      <div
        className="
          w-12
          h-12
          rounded-[12px]
          bg-black
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          border-2
          border-white
        "
      >

        <User size={28} />

      </div>

      {/* User Details */}

      <div>

        <h3
          className="
            font-bold
            text-gray-900
            text-base
            leading-tight
          "
        >

          {formData.name || "User"}

        </h3>

        <p
          className="
            text-xs
            text-gray-700
            font-medium
          "
        >

          📱 {formData.phone_No}

        </p>

        <p
          className="
            text-[11px]
            text-gray-600
          "
        >

          {formData.designation || "Job Seeker"}

        </p>

      </div>

    </div>

    {/* Edit Icon Button */}

    <button
      onClick={() => {

        setShowJobs(false);

        setShowMenu(false);

      }}
      className="
        w-10
    h-10
    rounded-[10px]
    bg-white/40
    text-black
    border
    border-white
    flex
    items-center
    justify-center
    shadow-md
    hover:bg-white
    transition-all
      "
    >

      <Pencil size={24} />

    </button>

  </div>

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

            

            <p className="mt-4 text-xs text-gray-500">
              Version 1.0 © 2026 Work Station.
              All Rights Reserved.
            </p>

          </div>

        )}


        <button
        onClick={() =>
          setActiveSidebarSection(
            activeSidebarSection === "privacy"
              ? ""
              : "privacy"
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
        <span>🔒 Privacy Policy</span>

        <span>
          {activeSidebarSection === "privacy"
            ? "▲"
            : "▼"}
        </span>
      </button>



       {activeSidebarSection === "privacy" && (

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
            🔒 Privacy Policy
          </h3>

          <p className="text-xs text-gray-500 mb-3">
            Last Updated: June 2026
          </p>

          <p>
            Welcome to Workstation Job
            (workstationjob.space).
          </p>

          <p className="mt-3">
            We value your privacy and are committed
            to protecting your personal information.
            This Privacy Policy explains how we
            collect, use, and protect information
            when you use our website.
          </p>

          <div className="mt-4">
            <h4 className="font-semibold">
              Information We Collect
            </h4>

            <ul className="list-disc ml-5 mt-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Resume and job application details</li>
              <li>Information submitted through contact forms</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">
              How We Use Your Information
            </h4>

            <ul className="list-disc ml-5 mt-1">
              <li>Provide job search services</li>
              <li>Connect candidates with employers</li>
              <li>Respond to inquiries and support requests</li>
              <li>Improve website functionality and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">
              Cookies
            </h4>

            <p>
              Our website may use cookies and similar
              technologies to improve user experience
              and analyze website traffic.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">
              Third-Party Services
            </h4>

            <p>
              We may use third-party services such as
              Google Analytics, Google AdSense, and
              other service providers. These services
              may collect information according to
              their own privacy policies.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">
              Data Security
            </h4>

            <p>
              We take reasonable measures to protect
              user information from unauthorized
              access, disclosure, or misuse.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">
              External Links
            </h4>

            <p>
              Our website may contain links to
              third-party websites. We are not
              responsible for the privacy practices
              of those websites.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">
              Children's Privacy
            </h4>

            <p>
              Our services are not directed toward
              children under 13 years of age.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">
              Changes to This Policy
            </h4>

            <p>
              We may update this Privacy Policy from
              time to time. Changes will be posted
              on this page.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">
              Contact Us
            </h4>

            <p>
              If you have questions regarding this
              Privacy Policy, please contact us
              through the Contact Us page.
            </p>
          </div>

        </div>

      )}


      <button
  onClick={() =>
    setActiveSidebarSection(
      activeSidebarSection === "contact"
        ? ""
        : "contact"
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
  <span>📞 Contact Us</span>

  <span>
    {activeSidebarSection === "contact"
      ? "▲"
      : "▼"}
  </span>
</button>


{activeSidebarSection === "contact" && (

  

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


  </div>

)}

















      </div>

      

     

    </div>

  );

}