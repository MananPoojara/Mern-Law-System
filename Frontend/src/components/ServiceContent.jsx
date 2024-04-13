import React, { useState } from "react";
import Table from "./Table";
import axios from "axios"; // Import axios for making HTTP requests

const ServiceContent = () => {
  const [showTable, setShowTable] = useState(false);
  const [sectionData, setSectionData] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:5000/ipc/${searchValue}`
      );
      if (response.status === 200) {
        setSectionData(response.data);
        setShowTable(true);
      } else {
        console.error("Error fetching data:", response.statusText);
        setShowTable(false);
        setError("Failed to fetch data. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setShowTable(false);
      setError("Failed to fetch data. Please try again later.");
    }
  };

  return (
    <>
      <div className="min-h-screen -mt-10 -mb-32 flex justify-center items-center">
        <div className="container mx-auto animate-text bg-gradient-to-r from-orange-400 to-green-400 p-14">
          <form
            className="mx-auto max-w-lg"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <h1 className="text-center font-bold text-white text-4xl">
              Unlocking IPC Section Meanings
            </h1>
            <p className="mx-auto font-normal text-sm my-6">
              Enter <span className="bg-orange-500">IPC Section Number</span> Or
              You Can Write <span className="bg-orange-500"> All Sections</span>{" "}
              For All Section With Description And Related Case Study
            </p>

            <div className="relative">
              <div className="overflow-hidden z-0 rounded-full relative p-3">
                <div
                  role="form"
                  className="relative flex z-50 bg-white rounded-full"
                >
                  <input
                    type="text"
                    placeholder="Enter IPC Section"
                    inputMode="numeric"
                    maxLength="4"
                    pattern="[0-9]*"
                    className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />

                  <button
                    type="submit"
                    className="bg-orange-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-orange-300 focus:bg-green-600 focus:outline-none"
                  >
                    Search
                  </button>
                </div>
                <div className="glow glow-1 z-30 bg-orange-500 absolute"></div>
                <div className="glow glow-2 z-30 bg-green-500 absolute"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {error && <p>{error}</p>}
      {showTable && sectionData && (
        <div className="fade-in">
          <Table ipcData={sectionData} />
        </div>
      )}
    </>
  );
};

export default ServiceContent;
