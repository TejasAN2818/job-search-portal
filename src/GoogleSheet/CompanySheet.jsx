const COMPANY_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxdKw3Bxn3x2ZJhyVGoVbBgyvKgfBgKsI5XEqg4DN14HxSYheleOeUnMqnJlPF7mCPs/exec";

export const saveCompanyJob = async (
  jobData
) => {

  try {

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

  } catch (error) {

    console.log(error);

  }

};