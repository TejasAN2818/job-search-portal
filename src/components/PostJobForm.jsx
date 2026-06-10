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

    await saveCompanyJob(
      jobData
    );

    alert(
      "Job Posted Successfully"
    );

    setShowPostJob(false);

  } catch (error) {

    console.log(error);

    alert(
      "Something went wrong"
    );

  }

};

  return (

    <form
      onSubmit={handleSubmit}
      className="
        max-w-md
        mx-auto
        bg-white
        border
        border-yellow-300
        rounded-3xl
        shadow-xl
        p-5
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
        className="
          bg-yellow-400
          hover:bg-yellow-500
          py-3
          rounded-xl
          font-bold
          transition-all
        "
      >

        Submit Job

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

  );

}