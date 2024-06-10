import React from "react";
import Card from "./Card";

const MainView = () => {

    const databases = [
      {
        name: "Sales Database",
        tables: 24,
        size: "2.3 GB",
        lastUpdated: "2023-05-01",
        description: "Tracks all sales data for the company.",
      },
      {
        name: "Inventory Management",
        tables: 18,
        size: "1.7 GB",
        lastUpdated: "2023-04-15",
        description: "Manages inventory levels and product information.",
      },
      {
        name: "Customer Relationship",
        tables: 32,
        size: "3.1 GB",
        lastUpdated: "2023-03-28",
        description: "Stores all customer data and interactions.",
      },
      {
        name: "Financial Reporting",
        tables: 14,
        size: "900 MB",
        lastUpdated: "2023-06-01",
        description: "Generates financial reports and statements.",
      },
      {
        name: "HR Database",
        tables: 21,
        size: "1.5 GB",
        lastUpdated: "2023-05-20",
        description: "Manages employee information and HR processes.",
      },
      {
        name: "Marketing Analytics",
        tables: 28,
        size: "2.8 GB",
        lastUpdated: "2023-04-30",
        description: "Tracks marketing campaigns and performance metrics.",
      },
    ];
  return (
    <main className="flex-1 p-5">
      <div className="w-full h-full border rounded-md p-5">
        <div className="flex flex-wrap gap-4">
          {
            databases.map((database) => (
              <Card
                name={database.name}
                tables={database.tables}
                size={database.size}
                lastUpdated={database.lastUpdated}
                description={database.description}
              />
            ))
          }
        </div>
      </div>
    </main>
  );
};

export default MainView;
