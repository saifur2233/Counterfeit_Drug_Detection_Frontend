import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../shared/Loading/Loading";

const MenuViewDrugDetails = () => {
  const {
    data: allDrugs = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allDrugs"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:4000/api/v1/menufacturer/drugs`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(allDrugs);

  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center">
          Menufacturer View Drugs Details
        </h1>
        <div className="py-8">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>menufacturerName</th>
                  <th>drugName</th>
                  <th>drugCode</th>
                  <th>drugDosage</th>
                  <th>drugQuantity</th>
                  <th>mfgDate</th>
                  <th>expDate</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allDrugs.drugs.map((drug, i) => (
                  <tr key={drug._id}>
                    <th>{i + 1}</th>
                    <td>{drug.menufacturerName}</td>
                    <td>{drug.drugName}</td>
                    <td>{drug.drugCode}</td>
                    <td>{drug.drugDosage}</td>
                    <td>{drug.drugQuantity}</td>
                    <td>{drug.mfgDate}</td>
                    <td>{drug.expDate}</td>
                    <td>
                      <button className="btn btn-square btn-secondary btn-outline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuViewDrugDetails;
