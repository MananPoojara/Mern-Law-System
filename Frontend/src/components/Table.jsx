import React from "react";

const Table = ({ ipcData }) => {
  console.log("ipcData:", ipcData);

  const dataArray = Array.isArray(ipcData) ? ipcData : [ipcData];

  return (
    <div className="flex flex-col w-full border-t border-r border-orange-500">
      <div className="flex flex-shrink-0 bg-orange-500 text-white font-bold">
        <div className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black">
          <span>Section</span>
        </div>
        <div className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black">
          <span>Description</span>
        </div>
        <div className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black">
          <span>Offense</span>
        </div>
        <div className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black">
          <span>Punishment</span>
        </div>
      </div>
      <div className="overflow-hidden">
        {dataArray.map((section, index) => (
          <div key={index} className="flex flex-shrink-0">
            <div className="flex items-center justify-center text-xl font-semibold flex-grow w-0 px-2 border-b border-l border-black">
              <span>Section {section.Section}</span>
            </div>
            <div className="flex items-center justify-center font-semibold flex-grow w-0 px-2 border-b border-l border-black">
              <span>{section.Description}</span>
            </div>
            <div className="flex items-center justify-center font-semibold flex-grow w-0 px-2 border-b border-l border-black">
              <span>{section.Offense}</span>
            </div>
            <div className="flex items-center justify-center font-semibold flex-grow w-0 px-2 border-b border-l border-black">
              <span>{section.Punishment}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-shrink-0 bg-green-500 text-white font-bold">
        <div className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l justify-center border-black">
          <a
            className="cursor-pointer underline"
            href="https://indiankanoon.org/docfragment/100369532/?big=2&formInput=case+studies"
          >
            <span>Case Study</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Table;
