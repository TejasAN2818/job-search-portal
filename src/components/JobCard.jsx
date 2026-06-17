import {
  Copy,
  Phone,
  MapPin,
  Briefcase,
  IndianRupee
} from "lucide-react";

import { useState } from "react";

export default function JobCard({
  job,
  handleApply,
  setSelectedJob
}) {

  if (!job) return null;

  const [showHR, setShowHR] =
    useState(false);

  const [isApplied, setIsApplied] =
    useState(false);

  const [isLoading, setIsLoading] =
    useState(false);

  const [popupMessage, setPopupMessage] =
    useState("");

  const popup = popupMessage && (

    <div
      className="
  fixed
  top-4
  left-1/2
  -translate-x-1/2
  w-[90%]
  max-w-[420px]
  bg-green-500
  text-white
  px-5
  py-4
  rounded-2xl
  shadow-2xl
  z-[9999]
  flex
  items-center
  justify-center
  gap-3
  text-center
  text-sm
  font-semibold
  leading-5
  animate-[slideDown_0.3s_ease]
"
    >

      <Phone size={20} />

      {popupMessage}

    </div>

  );

  return (

    <>

      {popup}

      <div
        onClick={() =>
          setSelectedJob(job)
        }
        className="
          bg-white
          rounded-2xl
          shadow-md
          hover:shadow-xl
          transition-all
          duration-300
          overflow-hidden
          cursor-pointer
          flex
          min-w-full
          h-[170px]
          border
          border-yellow-100
        "
      >

        {/* LEFT IMAGE */}

        <div className="w-[32%] h-full relative p-1">

          <img
            src={job.companyLogo}
            alt={job.companyName}
            className="
              w-full
              h-25
              object-cover
              rounded-xl
              shadow-lg
            "
          />

          {/* OPENINGS */}

          <div
            className="
              absolute
              top-1.5
              left-1.5
              bg-black/70
              text-white
              text-[8px]
              px-1.5
              py-0.5
              rounded-full
            "
          >

            {job.numberOfOpenings} Openings

          </div>

          {/* LOCATION BUTTON */}

          <a
            href={job.googleMapLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
              absolute
              bottom-3
              left-2
              right-2
              bg-yellow-200
              hover:bg-yellow-500
              text-black
              text-[11px]
              font-semibold
              py-2
              rounded-lg
              flex
              items-center
              justify-center
              gap-1
              shadow-md
            "
          >

            <MapPin size={12} />

            Location

          </a>

        </div>

        {/* RIGHT CONTENT */}

        <div
          className="
            w-[68%]
            p-3
            flex
            flex-col
            justify-between
          "
        >

          {/* TOP */}

          <div>

            {/* JOB TITLE */}

            <h2
              className={`
    font-bold
    text-slate-800
    mt-1
    leading-tight
    line-clamp-2
    break-words

    ${job.jobTitle.length > 30
                  ? "text-[10px]"
                  : job.jobTitle.length > 29
                    ? "text-[12px]"
                    : "text-sm"
                }
  `}
            >

              {job.jobTitle}

            </h2>

            {/* SALARY */}

            <div className="flex items-center gap-1 mt-2">

              <IndianRupee
                size={14}
                className="text-green-600"
              />

              <p
                className="
                  text-green-600
                  text-sm
                  font-bold
                "
              >

                {job.salary}

              </p>

            </div>

            {/* EXPERIENCE */}

            <div className="flex items-center gap-1 mt-1">

              <Briefcase
                size={12}
                className="text-gray-500"
              />

              <p
                className="
                  text-[11px]
                  text-gray-500
                "
              >

                {job.experience} exp

              </p>

            </div>

            {/* LOCATION */}

            <div className="flex items-center gap-2 mt-3">

              <MapPin
                size={18}
                className="
                  text-black-50
                  fill-red-600
                "
              />

              <p
                className="
                  text-sm
                  font-bold
                  text-slate-700
                  tracking-wide
                  line-clamp-1
                "
              >

                {job.location}

              </p>

            </div>

          </div>

          {/* BUTTON */}

          <div
            className="mt-3"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button

              onClick={() => {

                // PREVENT MULTIPLE CLICKS

                if (
                  isLoading ||
                  isApplied
                ) return;

                // COPY AGAIN IF HR ALREADY SHOWING

                if (showHR) {

                  navigator.clipboard.writeText(
                    job.hrPhoneNo
                  );

                  setPopupMessage(
                    "HR Number Copied"
                  );

                  setTimeout(() => {

                    setPopupMessage("");

                  }, 2000);

                  return;
                }

                setIsLoading(true);

                // DIRECT APPLY

                if (
                  job.directApply === "Yes"
                ) {

                  setTimeout(() => {

                    navigator.clipboard.writeText(
                      job.hrPhoneNo
                    );

                    setShowHR(true);

                    setIsLoading(false);

                    setPopupMessage(
                      "HR Number Copied"
                    );

                    setTimeout(() => {

                      setPopupMessage("");

                    }, 2000);

                  }, 1000);

                } else {

                  // NORMAL APPLY

                  setTimeout(() => {


                    handleApply(job);

                    setIsApplied(true);

                    setIsLoading(false);

                    setPopupMessage(
                      "Application Submitted Successfully. HR Will Contact You Shortly."
                    );

                    setTimeout(() => {

                      setPopupMessage("");

                    }, 4000);

                  }, 1000);

                }

              }}

              className={`
                w-full
                font-semibold
                py-2
                rounded-xl
                flex
                items-center
                justify-center
                gap-2
                text-xs
                transition-all
                duration-300

                ${isLoading
                  ? "bg-gray-500 text-white"
                  : showHR || isApplied
                    ? "bg-blue-500 text-white"
                    : "bg-green-500 text-white"
                }
              `}
            >

              {isLoading ? (

                <>

                  <div
                    className="
                      w-4
                      h-4
                      border-2
                      border-white
                      border-t-transparent
                      rounded-full
                      animate-spin
                    "
                  />

                  Please wait...

                </>

              ) : showHR ? (

                <>

                  <Phone size={14} />

                  Call HR
                  {" "}
                  {job.hrPhoneNo}

                  <Copy size={14} />

                </>

              ) : isApplied ? (

                "Applied"

              ) : (

                "Apply"

              )}

            </button>

          </div>

        </div>

      </div>

    </>

  );
}