const COMPANY_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbx35qs1tTSjJ4C2cQtmuZC2EQOabanowcySmPB7UlbvwV1MLEHlymp6ngKXHGHEf2VT9w/exec";

export const saveCompanyJob = async (
  jobData
) => {

  await fetch(
    COMPANY_SHEET_URL,
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type":
          "application/json"
      },
      body: JSON.stringify({

        companyName:
          jobData.companyName,

        jobTitle:
          jobData.jobTitle,

        vacancies:
          jobData.vacancies,

        salary:
          jobData.salary,

        location:
          jobData.location,

        hrName:
          jobData.hrName,

        contactNo:
          jobData.contactNo,

        type:
          "JOB_POST",

        createdAt:
          new Date().toLocaleString()

      })
    }
  );

};