import { useState } from "react";

import jobs from "./jobsData";

import JobCard from "./components/JobCard";

import JobDetailsModal from "./components/JobDetailsModal";

export default function App() {

  const [formData, setFormData] = useState({
    name: "",
    phone_No: "",
    designation: "",
    location: "",
    gender: ""
  });

  const [showJobs, setShowJobs] =
    useState(false);

  const [selectedJob, setSelectedJob] =
    useState(null);

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbz18DX-0EEynCQOi0DyG0fqFCBkgGlY5Dl7yd7yEuI5EeEXSHUmrKbuPNhP9ZI0i6Q/exec";

  // HANDLE INPUT CHANGES

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // SAVE TO GOOGLE SHEET

  const saveToGoogleSheet = async (
    jobTitle = ""
  ) => {

    try {

      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({
          ...formData,
          appliedJob: jobTitle,
          createdAt:
            new Date().toLocaleString()
        })
      });

    } catch (error) {

      console.log(error);
    }
  };

  // FORM SUBMIT

  const handleSubmit = (e) => {

    e.preventDefault();

    saveToGoogleSheet(
      "FORM_ENTRY"
    );

    setShowJobs(true);
  };

  // APPLY JOB

  const handleApply = (
  jobTitle
) => {

  saveToGoogleSheet(jobTitle);

};

  return (

  <div className="min-h-screen bg-yellow-50">

    {/* HEADER */}

    <header className="sticky top-0 z-40 bg-yellow-400 shadow-md px-4 py-4">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900">

            Work Station

          </h1>

          <p className="text-yellow-900 text-xs sm:text-sm mt-1">

            Find Your Dream Job

          </p>

        </div>

      </div>

    </header>

    {/* MAIN */}

    <div className="p-3 sm:p-5">

      {!showJobs ? (

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white border border-yellow-300 rounded-3xl shadow-xl p-5 flex flex-col gap-4"
        >

          <h2 className="text-xl font-bold text-center text-gray-800 mb-2">

            Job Search Form

          </h2>

          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-yellow-300 focus:border-yellow-500 rounded-xl p-3 outline-none text-sm"
          />

          <input
            type="tel"
            name="phone_No"
            placeholder="Enter Phone Number"
            value={formData.phone_No}
            onChange={handleChange}
            required
            className="border border-yellow-300 focus:border-yellow-500 rounded-xl p-3 outline-none text-sm"
          />

          <input
            type="text"
            name="designation"
            placeholder="Job Role / Designation"
            value={formData.designation}
            onChange={handleChange}
            className="border border-yellow-300 focus:border-yellow-500 rounded-xl p-3 outline-none text-sm"
          />

          <input
            type="text"
            name="location"
            placeholder="Preferred Location"
            value={formData.location}
            onChange={handleChange}
            className="border border-yellow-300 focus:border-yellow-500 rounded-xl p-3 outline-none text-sm"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border border-yellow-300 focus:border-yellow-500 rounded-xl p-3 outline-none text-sm bg-white"
          >

            <option value="">
              Select Gender
            </option>

            <option>
              Male
            </option>

            <option>
              Female
            </option>

            <option>
              Other
            </option>

          </select>

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 active:scale-[0.98] transition-all text-black font-bold py-3 rounded-xl shadow-md"
          >

            Search Jobs

          </button>

        </form>

      ) : (

        <>

          {/* TOP BAR */}

          <div className="flex items-center justify-between mb-4">
            

            <h2 className="text-lg sm:text-2xl font-bold text-gray-800">

              Available Jobs

            </h2>

            <button
              onClick={() =>
                setShowJobs(false)
              }
              className="bg-black text-white px-4 py-2 rounded-xl text-sm"
            >

              Back

            </button>

          </div>

          {/* JOB GRID */}

          <div className="flex flex-col gap-4">

            {jobs.map((job) => (

              <JobCard
                key={job.id}
                job={job}
                handleApply={handleApply}
                setSelectedJob={setSelectedJob}
              />

            ))}

          </div>

        </>

      )}

      {/* MODAL */}

      <JobDetailsModal
        selectedJob={selectedJob}
        setSelectedJob={setSelectedJob}
      />

    </div>

  </div>
);
}