import { useState } from "react";
import {
saveCompanyJob
} from "../GoogleSheet/CompanySheet";

export default function PostJobForm({
setShowPostJob
}) {

const [jobData, setJobData] =
useState({
companyName: "",
jobTitle: "",
vacancies: "",
salary: "",
location: "",
hrName: "",
contactNo: ""
});

const [loading, setLoading] =
useState(false);

const handleChange = (e) => {


setJobData({
  ...jobData,
  [e.target.name]:
    e.target.value
});


};

const handleSubmit = async (
e
) => {

e.preventDefault();

try {

  setLoading(true);

  await saveCompanyJob(
    jobData
  );

  setLoading(false);

  alert(
    "Job Posted Successfully"
  );

  setShowPostJob(false);

} catch (error) {

  console.log(error);

  setLoading(false);

  alert(
    "Something went wrong"
  );

}

};

return (

<>

  {loading && (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        z-[9999]
      "
    >
      <div
        className="
          bg-white
          px-8
          py-6
          rounded-2xl
          shadow-xl
          text-center
        "
      >
        <div
          className="
            w-10
            h-10
            border-4
            border-yellow-400
            border-t-transparent
            rounded-full
            animate-spin
            mx-auto
            mb-3
          "
        />

        <p className="font-semibold">
          Posting Job...
        </p>
      </div>
    </div>
  )}

  <form
    onSubmit={handleSubmit}
   className="
  w-full
  max-w-[400px]
  mx-auto
  mt-6
  bg-white
  border
  border-yellow-300
  rounded-3xl
  shadow-xl
  p-5
  pt-16
  flex
  flex-col
  gap-4
"
  >

    <h2
      className="
        text-xl
        font-bold
        text-center
      "
    >
      Post Job
    </h2>

    <input
      name="companyName"
      placeholder="Company Name *"
      value={jobData.companyName}
      onChange={handleChange}
      required
      className="
        border
        border-yellow-300
        p-3
        rounded-xl
      "
    />

    <input
      name="jobTitle"
      placeholder="Designation *"
      value={jobData.jobTitle}
      onChange={handleChange}
      required
      className="
        border
        border-yellow-300
        p-3
        rounded-xl
      "
    />

    <input
      type="number"
      name="vacancies"
      placeholder="Vacancies *"
      value={jobData.vacancies}
      onChange={handleChange}
      required
      className="
        border
        border-yellow-300
        p-3
        rounded-xl
      "
    />

    <input
      name="salary"
      placeholder="Salary *"
      value={jobData.salary}
      onChange={handleChange}
      required
      className="
        border
        border-yellow-300
        p-3
        rounded-xl
      "
    />

    <input
      name="location"
      placeholder="Location *"
      value={jobData.location}
      onChange={handleChange}
      required
      className="
        border
        border-yellow-300
        p-3
        rounded-xl
      "
    />

    <input
      name="hrName"
      placeholder="HR Name *"
      value={jobData.hrName}
      onChange={handleChange}
      required
      className="
        border
        border-yellow-300
        p-3
        rounded-xl
      "
    />

    <input
      type="tel"
      name="contactNo"
      placeholder="Contact Number *"
      value={jobData.contactNo}
      onChange={handleChange}
      required
      className="
        border
        border-yellow-300
        p-3
        rounded-xl
      "
    />

    <button
      type="submit"
      disabled={loading}
      className="
        bg-yellow-400
        hover:bg-yellow-500
        py-3
        rounded-xl
        font-bold
        transition-all
        disabled:opacity-50
      "
    >
      {loading
        ? "Posting..."
        : "Submit Job"}
    </button>

    <button
      type="button"
      onClick={() =>
        setShowPostJob(false)
      }
      className="
        bg-gray-200
        hover:bg-gray-300
        py-3
        rounded-xl
        font-semibold
        transition-all
      "
    >
      Cancel
    </button>

  </form>

</>


);

}
