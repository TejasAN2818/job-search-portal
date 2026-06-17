import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Menu } from "lucide-react";


import jobs from "./jobsData";
import JobCard from "./components/JobCard";
import JobDetailsModal from "./components/JobDetailsModal";
import PostJobForm from "./components/PostJobForm";
import Header from "./main_components/Header";
import Sidebar from "./main_components/Sidebar";
import JobSearchForm from "./main_components/JobSearchForm";
import CategoryBar from "./main_components/CategoryBar";
import JobList from "./main_components/JobList";
import {
  saveUserData
} from "./GoogleSheet/UserSheet";

import {
  saveApplicationData
} from "./GoogleSheet/client_google_Sheet/SaveApplicationData";

import Footer from "./main_components/Footer";

export default function App() {

  const [formData, setFormData] =
    useState(() => {

      const savedData =
        localStorage.getItem(
          "workstation-user"
        );

      return savedData
        ? JSON.parse(savedData)
        : {
          name: "",
          phone_No: "",
          designation: "",
          location: "",
          gender: ""
        };
    });

  const [showJobs, setShowJobs] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Jobs");

  const [activeSidebarSection, setActiveSidebarSection] = useState("");

  const [showPostJob, setShowPostJob] = useState(false);



  const categories = [
    "All Jobs",
    ...Array.from(
      new Set(
        jobs
          .map((job) => job.category)
          .filter(Boolean)
      )
    )
  ];


  // HANDLE INPUT CHANGES

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {

    localStorage.setItem(
      "workstation-user",
      JSON.stringify(formData)
    );

  }, [formData]);




  // FORM SUBMIT

  const handleSubmit = (e) => {

    e.preventDefault();

    // Show jobs immediately
    setShowJobs(true);

    // Save in background
    saveUserData(formData)
      .catch((error) => {

        console.log(
          "Google Sheet Error:",
          error
        );

      });

  };

  // APPLY JOB


  const handleApply = (
    job
  ) => {

    saveApplicationData(
      formData,
      job
    );

  };

  return (

   // <div className="min-h-screen bg-yellow-50">
    <div className="min-h-screen bg-yellow-50 flex flex-col">

      {/* HEADER */}

     
      <Header
  setShowMenu={setShowMenu}
  setShowPostJob={setShowPostJob}
  setShowJobs={setShowJobs}
  showJobs={showJobs}
/>

      {/* OVERLAY */}

      <div
        onClick={() => setShowMenu(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 
          ${showMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible"
          }`}
      />

      {/* SIDE BARS */}
      <Sidebar
        showMenu={showMenu}
        setShowMenu={setShowMenu}


        categories={categories}
        setSelectedCategory={setSelectedCategory}
        setShowJobs={setShowJobs}

        formData={formData}







        activeSidebarSection={activeSidebarSection}
        setActiveSidebarSection={setActiveSidebarSection}
      />



      {/* MAIN */}
      {/* <div className="pt-[62px] p-3 sm:p-5"> */}
      <div className="pt-[62px] p-3 sm:p-5 flex-1">

        {showPostJob ? (

          <PostJobForm
            setShowPostJob={
              setShowPostJob
            }
          />

        ) : !showJobs ? (

          //job search form
          <JobSearchForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

        ) : (

          <>

            {/* catagory BAR */}

            <CategoryBar
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            {/* JOB GRID */}

            <JobList
              jobs={jobs}
              selectedCategory={selectedCategory}
              handleApply={handleApply}
              setSelectedJob={setSelectedJob}
            />

          </>

        )}

        {/* MODAL */}

        <JobDetailsModal
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
          handleApply={handleApply}
        />

 

      </div>
            {showJobs && (
  <Footer />
)}
      

      <Analytics />

    </div>


  );
}