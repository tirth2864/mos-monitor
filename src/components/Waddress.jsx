import { list } from "postcss";
import React, { useState } from "react";
export let inputAddresses = [];

function Waddress() {
  const [inputList, setInputList] = useState([{ WalletAddress: ""}]);
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    inputAddresses = list;
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    inputAddresses = list;
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { WalletAddress: "" }]);
    inputAddresses = list;
  };
 
  return (
    <div className="">
      {inputList.map((x, i) => {
        return (
          <div className="font-barlow" key={x.WalletAddress}>
            <label htmlFor="hero-field" className="my-2 leading-7 text-lg text-gray-300">Wallet Address</label>
            <input name="WalletAddress" className="w-full bg-extreme rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-emerald-900 focus:bg-transparent focus:border-emerald-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={x.WalletAddress} onChange={e => handleInputChange(e, i)}/>
            <div className="btn-box">
              {inputList.length !== 1 && <button className="my-5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button className="mt-5 text-mild hover:border-spicy hover:border-solid hover:text-spicy group w-full flex items-center justify-center rounded-md border-2 border-dashed border-spicy text-sm leading-6 font-medium py-3" onClick={handleAddClick}>
              <svg width="20" height="20" fill="currentColor" className="mr-2" aria-hidden="true">
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
          </svg>Add More Wallet</button>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
 
export default Waddress;