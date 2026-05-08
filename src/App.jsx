import { useState } from "react";

const jobs = [
  {
    id: 1,
    title: "React JS Developer",
    salary: "₹35,000 - ₹60,000",
    experience: "1 - 3 Years",
    languages: "JavaScript, ReactJS",
    location: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    map: "https://maps.google.com/?q=Bengaluru"
  },
  {
    id: 2,
    title: "UI/UX Designer",
    salary: "₹25,000 - ₹45,000",
    experience: "0 - 2 Years",
    languages: "Figma, HTML, CSS",
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
    map: "https://maps.google.com/?q=Hyderabad"
  },
  {
    id: 3,
    title: "Digital Marketing Executive",
    salary: "₹20,000 - ₹40,000",
    experience: "1 - 2 Years",
    languages: "English, Kannada",
    location: "Chennai",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    map: "https://maps.google.com/?q=Chennai"
  }
];

export default function App() {

  const [formData, setFormData] = useState({
    name: "",
    phone_No: "",
    designation: "",
    location: "",
    gender: ""
  });

  const [showJobs, setShowJobs] = useState(false);

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbz18DX-0EEynCQOi0DyG0fqFCBkgGlY5Dl7yd7yEuI5EeEXSHUmrKbuPNhP9ZI0i6Q/exec";

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // SAVE DATA TO GOOGLE SHEET
  const saveToGoogleSheet = async (jobTitle = "") => {

    try {

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          appliedJob: jobTitle,
          createdAt: new Date().toLocaleString()
        })
      });

    } catch (error) {

      console.log(error);
    }
  };

  // SAVE FORM ENTRY ONLY ONCE
  const handleSubmit = async (e) => {

    e.preventDefault();

    // SAVE USER ENTRY
    await saveToGoogleSheet("FORM_ENTRY");

    // SHOW JOBS
    setShowJobs(true);
  };

  // SAVE JOB APPLICATION
  const handleApply = async (jobTitle) => {

    await saveToGoogleSheet(jobTitle);

    alert("Application submitted successfully!");
  };

  return (

    <div className="container">

      <h1 className="title">
        Job Search Portal
      </h1>

      {!showJobs ? (

        <form className="form-card" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone_No"
            placeholder="Enter Your Phone Number"
            value={formData.phone_No}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="designation"
            placeholder="Enter Designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Enter Location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
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

          </select>

          <button type="submit">
            Search Jobs
          </button>

        </form>

      ) : (

        <div className="job-grid">

          {jobs.map((job) => (

            <div className="job-card" key={job.id}>

              <img
                src={job.image}
                alt={job.title}
              />

              <h2>
                {job.title}
              </h2>

              <p>
                <strong>Salary:</strong> {job.salary}
              </p>

              <p>
                <strong>Experience:</strong> {job.experience}
              </p>

              <p>
                <strong>Languages:</strong> {job.languages}
              </p>

              <p>
                <strong>Location:</strong> {job.location}
              </p>

              <a
                href={job.map}
                target="_blank"
                rel="noreferrer"
              >
                View Location
              </a>

              <button
                onClick={() => handleApply(job.title)}
              >
                Apply Now
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}