export default function JobDetailsModal({
  selectedJob,
  setSelectedJob
}) {

  if (!selectedJob) return null;

  return (

    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-end sm:items-center">

      <div className="bg-white w-full sm:max-w-3xl rounded-t-3xl sm:rounded-2xl overflow-y-auto max-h-[95vh] relative">

        <button
          onClick={() =>
            setSelectedJob(null)
          }
          className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg text-sm"
        >

          Close

        </button>

        <img
          src={selectedJob.companyLogo}
          alt=""
          className="w-full h-52 sm:h-60 object-cover"
        />

        <div className="p-5">

          <h1 className="text-2xl sm:text-3xl font-bold mb-5">

            {selectedJob.jobTitle}

          </h1>

          <div className="space-y-3 text-sm sm:text-base">

            <p>
              <strong>Company:</strong>
              {" "}
              {selectedJob.companyName}
            </p>

            <p>
              <strong>Salary:</strong>
              {" "}
              {selectedJob.salary}
            </p>

            <p>
              <strong>Experience:</strong>
              {" "}
              {selectedJob.experience}
            </p>

            <p>
              <strong>Location:</strong>
              {" "}
              {selectedJob.location}
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
              <strong>Industry:</strong>
              {" "}
              {selectedJob.industryType}
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
              <strong>Office Timing:</strong>
              {" "}
              {selectedJob.officeTiming}
            </p>

            <div>

              <strong>Description:</strong>

              <p className="text-gray-700 mt-2 leading-relaxed">

                {selectedJob.fullJobDescription}

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}