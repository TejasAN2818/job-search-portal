import { Menu } from "lucide-react";

export default function Header({
  setShowMenu,
  setShowPostJob,
  setShowJobs
}) {

  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-yellow-400 shadow-md px-4 py-2">

      <div className="flex items-center justify-between">

        {/* MENU BUTTON */}

        <button
          onClick={() =>
            setShowMenu(true)
          }
          className="
            bg-black
            text-white
            p-2
            rounded-lg
            shadow-md
          "
        >

          <Menu size={18} />

        </button>

        {/* APP NAME */}

        <div>

          <h1
            className="
              text-xl
              sm:text-3xl
              font-extrabold
              text-gray-900
              leading-tight
            "
          >

            Work Station

          </h1>

          <p
            className="
              text-yellow-900
              text-[10px]
              sm:text-xs
            "
          >

            Find Your Dream Job

          </p>

        </div>

        {/* POST JOB BUTTON */}

        <button
          onClick={() => {

            setShowPostJob(true);
            setShowJobs(false);
            setShowMenu(false);

          }}
          className="
            bg-black
            text-white
            px-3
            py-1.5
            rounded-xl
            text-[11px]
            sm:text-xs
            font-semibold
            shadow-sm
            active:scale-95
            transition-all
            flex
            items-center
            gap-1.5
          "
        >

          Post Jobs

          <span
            className="
              bg-yellow-400
              text-black
              px-1.5
              py-[2px]
              rounded-md
              text-[8px]
              font-bold
              leading-none
            "
          >

            FREE

          </span>

        </button>

      </div>

    </header>

  );

}