export default function JobSearchForm({
  formData,
  handleChange,
  handleSubmit
}) {

  return (

    <form
  onSubmit={handleSubmit}
  className="
    w-full
    max-w-[400px]
    mx-auto
    bg-white
    border
    border-yellow-300
    rounded-3xl
    shadow-xl
    p-5
      pt-20
      mt-3
    flex
    flex-col
    gap-4
  "
>

      <h2 className="text-xl font-bold text-center text-gray-800 mb-2">
        Job Search Form
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="border border-yellow-300 focus:border-yellow-500 rounded-xl p-3 outline-none text-sm"
      />

      <input
        type="tel"
        name="phone_No"
        placeholder="Enter Phone Number"
        value={formData.phone_No}
        onChange={handleChange}
        required
        className="border border-yellow-300 focus:border-yellow-500 rounded-xl p-3 outline-none text-sm"
      />

      <input
        type="text"
        name="designation"
        placeholder="Job Role / Designation"
        value={formData.designation}
        onChange={handleChange}
        className="border border-yellow-300 focus:border-yellow-500 rounded-xl p-3 outline-none text-sm"
      />

      <input
        type="text"
        name="location"
        placeholder="Preferred Location"
        value={formData.location}
        onChange={handleChange}
        className="border border-yellow-300 focus:border-yellow-500 rounded-xl p-3 outline-none text-sm"
      />

      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="border border-yellow-300 focus:border-yellow-500 rounded-xl p-3 outline-none text-sm bg-white"
      >

        <option value="">
          Select Gender
        </option>

        <option>Male</option>
        <option>Female</option>
        <option>Other</option>

      </select>

      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 active:scale-[0.98] transition-all text-black font-bold py-3 rounded-xl shadow-md"
      >

        Submit

      </button>

    </form>

  );

}