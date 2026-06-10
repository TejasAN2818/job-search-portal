const USER_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbz18DX-0EEynCQOi0DyG0fqFCBkgGlY5Dl7yd7yEuI5EeEXSHUmrKbuPNhP9ZI0i6Q/exec";

export const saveUserData = async (
  formData,
  jobTitle = ""
) => {

  try {

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
          ...formData,
          appliedJob: jobTitle,
          createdAt:
            new Date().toLocaleString()
        })
      }
    );

  } catch (error) {

    console.log(error);

  }

};