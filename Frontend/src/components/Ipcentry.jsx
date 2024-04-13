import React, { useState } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";

const Ipcentry = () => {
  const [sectionNo, setSectionNo] = useState("");
  const [description, setDescription] = useState("");
  const [offense, setOffense] = useState("");
  const [punishment, setPunishment] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/ipc/entry", {
        Section: sectionNo,
        Description: description,
        Offense: offense,
        Punishment: punishment,
      });
      setSuccessMessage("Data submitted successfully!");
      setErrorMessage("");
      console.log(response.data);
      // Handle success
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("Error submitting data. Please try again.");
      console.error("Error creating IPC entry:", error);
      // Handle error
    }
  };

  return (
    <>
      <AdminNav />
      <div className="bg-orange-500 shadow-md text-white rounded px-2 py-8 mb-4 md:ms-96 mt-10 sm:ms-40  w-1/2">
        <div className="w-full md:max-w-sm mx-auto">
          {successMessage && (
            <div className="bg-green-500 text-white font-bold py-2 px-4 mb-3 rounded">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-500 text-white font-bold py-2 px-4 mb-3 rounded">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-800"
              htmlFor="section-no"
            >
              Section No.
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-300 rounded py-3 px-4 mb-3"
              id="section-no"
              type="number"
              placeholder="Section No."
              value={sectionNo}
              onChange={(e) => setSectionNo(e.target.value)}
            />
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-800"
              htmlFor="Description"
            >
              Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-300 rounded py-3 px-4 mb-3"
              id="desc"
              type="area"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-800"
              htmlFor="password"
            >
              Offense
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-300 rounded py-3 px-4 mb-3"
              id="offense"
              type="text"
              placeholder="Offense"
              value={offense}
              onChange={(e) => setOffense(e.target.value)}
            />
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-800"
              htmlFor="city"
            >
              Punishment
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-300 rounded py-3 px-4 mb-3"
              id="punishment"
              type="text"
              placeholder="punishment"
              value={punishment}
              onChange={(e) => setPunishment(e.target.value)}
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Ipcentry;
