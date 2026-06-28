import {
  MapPin,
  Phone,
  Copy,
  Briefcase,
  IndianRupee,
  Building2,
  Clock3,
  Users
} from "lucide-react";

import { useState } from "react";

export default function JobDetailsModal({
  selectedJob,
  setSelectedJob,
  handleApply
}) {

  if (!selectedJob) return null;

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

      <Phone size={15} />

      {popupMessage}

    </div>

  );

  return (

    <>

      {popup}


     <div
  className="
    fixed
    inset-y-0
    left-1/2
    -translate-x-1/2
    w-full
    max-w-[430px]
    bg-black/60
    z-50
    flex
    justify-center
    items-center
    p-2
    overflow-y-auto
  "
>

        <div
  className="
    bg-white
    w-[95%]
    max-w-[410px]
    rounded-3xl
    overflow-y-auto
    overflow-x-hidden
    max-h-[82vh]
    relative
    shadow-2xl
    my-auto
  "
>

          {/* FIXED CLOSE BUTTON */}

          <button
            onClick={() =>
              setSelectedJob(null)
            }
           className="
absolute
top-4
right-4
bg-red-500
text-white
px-4
py-2
rounded-xl
text-sm
z-50
shadow-xl
"
          >

            Close

          </button>

          {/* IMAGE SECTION */}

          <div className="relative h-[220px] sm:h-[300px] overflow-hidden rounded-t-3xl">

            {/* BLUR BACKGROUND */}

            <img
              src={selectedJob.companyLogo}
              alt=""
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                blur-3xl
                scale-125
                opacity-50
              "
            />

            {/* ORIGINAL IMAGE */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                p-4
              "
            >

              <img
                src={selectedJob.companyLogo}
                alt=""
                className="
                  h-full
                  aspect-square
                  object-cover
                  rounded-3xl
                  border-4
                  border-white
                  shadow-2xl
                "
              />

            </div>

          </div>

          {/* CONTENT */}

          <div className="p-5 space-y-6">

            {/* JOB TITLE */}

            <div>

              <h1 className="text-3xl font-bold text-slate-800">

                {selectedJob.jobTitle}

              </h1>

              {/* LOCATION */}

              <div className="flex items-center gap-2 mt-3">

                <MapPin
                  size={20}
                  className="fill-red-500 text-red-500"
                />

                <p className="text-lg font-semibold text-slate-700">

                  {selectedJob.location}

                </p>

              </div>

            </div>

            {/* SALARY + EXPERIENCE */}

            <div
              className="
    bg-yellow-50
    border
    border-yellow-200
    rounded-2xl
    px-4
    py-3
    flex
    items-center
    justify-between
    shadow-sm
    gap-3
  "
            >

              {/* SALARY */}

              <div className="flex-1">

                <div className="flex items-center gap-1">

                  <IndianRupee
                    className="text-green-600"
                    size={16}
                  />

                  <p className="text-[11px] text-gray-500 font-medium">

                    Salary

                  </p>

                </div>

                <p
                  className="
        font-bold
        text-sm
        sm:text-lg
        text-green-600
        mt-1
        leading-tight
      "
                >

                  {selectedJob.salary}

                </p>

              </div>

              {/* DIVIDER */}

              <div className="w-[1px] h-10 bg-yellow-300" />

              {/* EXPERIENCE */}

              <div className="flex-1">

                <div className="flex items-center gap-1">

                  <Briefcase
                    className="text-blue-600"
                    size={16}
                  />

                  <p className="text-[11px] text-gray-500 font-medium">

                    Experience

                  </p>

                </div>

                <p
                  className="
        font-bold
        text-sm
        sm:text-lg
        text-slate-700
        mt-1
        leading-tight
      "
                >

                  {selectedJob.experience}

                </p>

              </div>

            </div>

            {/* LOCATION + APPLY */}


            <div className="grid grid-cols-2 gap-2">

              {/* LOCATION BUTTON */}

              <a
                href={selectedJob.googleMapLink}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-yellow-400
                  hover:bg-yellow-500
                  text-black
                  font-bold
                  py-2.5
                  rounded-2xl
                  shadow-md
                  text-xs
                  
                "
              >

                <MapPin size={15} />

                Location

              </a>

              {/* APPLY BUTTON */}
              {/* APPLY BUTTON */}

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
                      selectedJob.hrPhoneNo
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
                    selectedJob.directApply === "Yes"
                  ) {

                    setTimeout(() => {

                      navigator.clipboard.writeText(
                        selectedJob.hrPhoneNo
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

                      handleApply(
                        selectedJob
                      );

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
    font-bold
    py-2.5
    rounded-2xl
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
          w-5
          h-5
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

                    <Phone size={15} />

                    HR
                    {" "}
                    {selectedJob.hrPhoneNo}

                    <Copy size={18} />

                  </>

                ) : isApplied ? (

                  "Applied"

                ) : (

                  "Apply"

                )}

              </button>

            </div>

            {/* OTHER DETAILS */}

            <div className="space-y-4 text-sm sm:text-base">

              <div className="flex items-center gap-2">
                <Building2 size={18} />
                <span>
                  <strong>Company:</strong>
                  {" "}
                  {selectedJob.companyName}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Users size={18} />
                <span>
                  <strong>Openings:</strong>
                  {" "}
                  {selectedJob.numberOfOpenings}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={18} />
                <span>
                  <strong>Timing:</strong>
                  {" "}
                  {selectedJob.officeTiming}
                </span>
              </div>

              <p>
                <strong>Industry:</strong>
                {" "}
                {selectedJob.industryType}
              </p>

              <p>
                <strong>Employment Type:</strong>
                {" "}
                {selectedJob.employmentType}
              </p>

              <p>
                <strong>Work Mode:</strong>
                {" "}
                {selectedJob.workMode}
              </p>

              <p>
                <strong>Gender:</strong>
                {" "}
                {selectedJob.gender}
              </p>

              <p>
                <strong>Age Limit:</strong>
                {" "}
                {selectedJob.ageLimit}
              </p>

              <p>
                <strong>Working Days:</strong>
                {" "}
                {selectedJob.workingDays}
              </p>

              <p>
                <strong>Qualification:</strong>
                {" "}
                {selectedJob.educationQualification}
              </p>

            </div>

            {/* DESCRIPTION */}

            <div>

              <h2 className="text-xl font-bold mb-3">

                Job Description

              </h2>

              <p className="text-gray-700 leading-relaxed">

                {selectedJob.fullJobDescription}

              </p>

            </div>

            {/* SKILLS */}

            <div>

              <h2 className="text-xl font-bold mb-3">

                Skills Required

              </h2>

              <div className="flex flex-wrap gap-2">

                {selectedJob.requiredSkills?.map(
                  (skill, index) => (

                    <span
                      key={index}
                      className="
                        bg-yellow-100
                        text-yellow-900
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-medium
                      "
                    >

                      {skill}

                    </span>

                  )
                )}

              </div>

            </div>

            {/* REQUIREMENTS */}

            <div>

              <h2 className="text-xl font-bold mb-3">

                Requirements

              </h2>

              <div className="flex flex-wrap gap-2">

                {selectedJob.requirements?.map(
                  (item, index) => (

                    <span
                      key={index}
                      className="
                        bg-red-100
                        text-red-700
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-medium
                      "
                    >

                      {item}

                    </span>

                  )
                )}

              </div>

            </div>

            {/* BENEFITS */}

            <div>

              <h2 className="text-xl font-bold mb-3">

                Benefits

              </h2>

              <div className="flex flex-wrap gap-2">

                {selectedJob.benefits?.map(
                  (item, index) => (

                    <span
                      key={index}
                      className="
                        bg-green-100
                        text-green-700
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-medium
                      "
                    >

                      {item}

                    </span>

                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </>

  );
}