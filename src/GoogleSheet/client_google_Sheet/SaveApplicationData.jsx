export const saveApplicationData = async (
  formData,
  job
) => {

  await fetch(
    job.sheetUrl,
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type":
          "application/json"
      },
      body: JSON.stringify({
        ...formData,
        appliedJob:
          job.jobTitle,
        createdAt:
          new Date().toLocaleString()
      })
    }
  );

};