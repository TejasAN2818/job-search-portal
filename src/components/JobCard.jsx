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

const [popupMessage, setPopupMessage] =
  useState("");


  const popup = popupMessage && (

  <div
    className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      bg-green-500
      text-white
      px-6
      py-4
      rounded-2xl
      shadow-2xl
      z-50
      flex
      items-center
      gap-3
      animate-bounce
      text-sm
      font-semibold
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
          className="w-full h-25 object-cover rounded-xl shadow-lg"
        />

        {/* OPENINGS */}

        <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded-full">

          {job.numberOfOpenings} Openings

        </div>

        {/* LOCATION BUTTON */}

        <a
          href={job.googleMapLink}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
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

      <div className="w-[68%] p-3 flex flex-col justify-between">

        {/* TOP */}

        <div>



          {/* JOB TITLE */}

          <h2 className="text-sm font-bold text-slate-800 mt-1 line-clamp-2 leading-tight">

            {job.jobTitle}

          </h2>




          {/* SALARY */}

          <div className="flex items-center gap-1 mt-2">

            <IndianRupee
              size={14}
              className="text-green-600"
            />

            <p className="text-green-600 text-sm font-bold">

              {job.salary}

            </p>

          </div>

          {/* EXPERIENCE */}

          <div className="flex items-center gap-1 mt-1">

            <Briefcase
              size={12}
              className="text-gray-500"
            />

            <p className="text-[11px] text-gray-500">

              {job.experience} exp

            </p>

          </div>

          {/* LOCATION */}

          <div className="flex items-center gap-2 mt-3">

            <MapPin
              size={18}
              className="text-black-50 fill-red-600"
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

      // DIRECT APPLY

      if (
        job.directApply === "Yes"
      ) {

        navigator.clipboard.writeText(
          job.hrPhoneNo
        );

        setShowHR(true);

setPopupMessage(
  "HR Number Copied"
);

setTimeout(() => {

  setPopupMessage("");

}, 2000);

      } else {

      

   handleApply(
  job.jobTitle
);

setIsApplied(true);

setPopupMessage(
  "Application Submitted Successfully. HR Will Contact You Shortly."
);

setTimeout(() => {

  setPopupMessage("");

}, 3000);
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

     ${
  showHR || isApplied
    ? "bg-blue-500 text-white"
    : "bg-green-500 text-white"
}
    `}
  >

    {showHR ? (

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