import React from "react";

function FormField(props) {
  return (
    <div>
      <div className="flex gap-2 mb-2 items-center">
        <label
          htmlFor={props.name}
          className="block text-sm font-medium text-gray-900 dark:text-[#ffffff]"
        >
          {props.labelName}
        </label>
        {props.isSupriseMe && (
          <button
            type="button"
            onClick={props.handleSurpriseMe}
            className="font-semibold text-xs bg-[#ececf1] rounded-[5px] p-2 text-black"
          >
            Generate Random
          </button>
        )}
      </div>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
        className="bg-gray-50 border dark:text-[#ffffff] dark:bg-neutral-600 dark:border-black border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] dark:focus:border-[#ffffff] outline-none block w-full p-3"
      />
    </div>
  );
}

export default FormField;
