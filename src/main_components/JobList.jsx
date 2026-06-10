import JobCard from "../components/JobCard";

export default function JobList({
  jobs,
  selectedCategory,
  handleApply,
  setSelectedJob
}) {

  return (

    <div className="flex flex-col gap-4 pt-[55px]">

      {jobs
        .filter((job) =>
          selectedCategory === "All Jobs"
            ? true
            : job.category === selectedCategory
        )
        .map((job) => (

          <JobCard
            key={job.id}
            job={job}
            handleApply={handleApply}
            setSelectedJob={setSelectedJob}
          />

        ))}

    </div>

  );

}