import { useEffect } from "react";
import JobCard from "../components/JobCard";

export default function JobList({
  jobs,
  selectedCategory,
  handleApply,
  setSelectedJob,
  setJobCount
}) {

  const sortedJobs =
    [...jobs]
      .filter((job) =>
        selectedCategory === "All Jobs"
          ? true
          : job.category === selectedCategory
      )
      .sort(
        (a, b) =>
          (b.views || 0) -
          (a.views || 0)
      );

    useEffect(() => {
  setJobCount(sortedJobs.length);
}, [sortedJobs, setJobCount]);

  return (

    // <div className="flex flex-col gap-4 pt-[55px]">
    <div className="flex flex-col gap-4 pt-[55px] flex-1">

      {sortedJobs.map((job) => (

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