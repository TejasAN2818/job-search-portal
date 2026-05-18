import {
  Copy,
  Phone
} from "lucide-react";

export default function JobCard({
  job,
  handleApply,
  setSelectedJob
}) {

  if (!job) return null;

  const copyNumber = () => {

    navigator.clipboard.writeText(
      job.hrPhoneNo
    );

    alert(
      `Copied: ${job.hrPhoneNo}`
    );
  };

  return (

    <div
      onClick={() =>
        setSelectedJob(job)
      }
      className="bg-white rounded-2xl overflow-hidden shadow-md border border-yellow-200 active:scale-[0.98] transition-all duration-200 cursor-pointer"
    >

      <img
        src={job.companyLogo}
        alt={job.companyName}
        className="w-full h-40 sm:h-44 object-cover"
      />

      <div className="p-4">

        <h2 className="text-lg sm:text-2xl font-bold text-gray-800 leading-tight">

          {job.jobTitle}

        </h2>

        <p className="text-gray-500 text-sm mb-3">

          {job.companyName}

        </p>

        <div className="space-y-1 text-sm sm:text-base">

          <p>
            <strong>Salary:</strong>
            {" "}
            {job.salary}
          </p>

          <p>
            <strong>Experience:</strong>
            {" "}
            {job.experience}
          </p>

          <p>
            <strong>Openings:</strong>
            {" "}
            {job.numberOfOpenings}
          </p>

          <p>
            <strong>Qualification:</strong>
            {" "}
            {job.educationQualification}
          </p>

          <p>
            <strong>Location:</strong>
            {" "}
            {job.location}
          </p>

        </div>

        <p className="text-sm text-gray-600 mt-3 line-clamp-3">

          {job.shortDescription}

        </p>

        {job.directApply === "Yes" ? (

          <button
            onClick={(e) => {

              e.stopPropagation();

              copyNumber();
            }}
            className="w-full mt-5 bg-green-500 active:bg-green-600 text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2 text-sm sm:text-base"
          >

            <Phone size={18} />

            {job.hrPhoneNo}

            <Copy size={18} />

          </button>

        ) : (

          <button
            onClick={(e) => {

              e.stopPropagation();

              handleApply(
                job.jobTitle
              );
            }}
            className="w-full mt-5 bg-yellow-400 active:bg-yellow-500 text-black font-bold py-3 rounded-xl text-sm sm:text-base"
          >

            Apply Now

          </button>

        )}

      </div>

    </div>
  );
}