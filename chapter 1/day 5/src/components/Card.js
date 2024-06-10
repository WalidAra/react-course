import React from "react";

const Card = ({ name, tables, size, lastUpdated, description }) => {
  return (
    <div
      class="border text-card-foreground bg-slate-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      data-id="23"
      data-v0-t="card"
    >
      <div class="flex flex-col space-y-1.5 p-6" data-id="24">
        <h3
          class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight"
          data-id="25"
        >
          {name}
        </h3>
      </div>
      <div class="p-6 space-y-2" data-id="26">
        <div class="flex items-center justify-between" data-id="27">
          <div class="text-gray-500 dark:text-gray-400" data-id="28">
            Tables
          </div>
          <div data-id="29"> {tables} </div>
        </div>
        <div class="flex items-center justify-between" data-id="30">
          <div class="text-gray-500 dark:text-gray-400" data-id="31">
            Size
          </div>
          <div data-id="32">{size}</div>
        </div>
        <div class="flex items-center justify-between" data-id="33">
          <div class="text-gray-500 dark:text-gray-400" data-id="34">
            Last Updated
          </div>
          <div data-id="35">{lastUpdated}</div>
        </div>
        <div class="text-gray-500 dark:text-gray-400 line-clamp-2" data-id="36">
          {description}
        </div>
      </div>
      <div class="items-center p-6 flex justify-end" data-id="37">
        <button
          class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-black text-white hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
          data-id="38"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
