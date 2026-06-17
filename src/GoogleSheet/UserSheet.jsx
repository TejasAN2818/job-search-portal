const USER_SHEET_URL =
"https://script.google.com/macros/s/AKfycbwZZOugSG-0evLcAUCl6RZvHdUiKUPXH3rHCiBSLhDMtetToMuAJoDKwnybr5W-6g_z1Q/exec";

export const saveUserData = async (
  formData
) => {

  console.log({
  name: formData.name,
  phone_No: formData.phone_No,
  designation: formData.designation,
  location: formData.location,
  gender: formData.gender
});

  await fetch(
    USER_SHEET_URL,
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type":
          "application/json"
      },
      body: JSON.stringify({

        name:
          formData.name,

        phone_No:
          formData.phone_No,

        designation:
          formData.designation,

        location:
          formData.location,

        gender:
          formData.gender,

        createdAt:
          new Date().toLocaleString()

      })
    }
  );

};