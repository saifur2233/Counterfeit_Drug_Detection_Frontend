import React, { useEffect, useState } from "react";
import Loading from "../../shared/Loading/Loading";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const CheckAuthenticity = () => {
  const code = useParams();
  const drugCode = code?.drugCode;

  const { data: drug = [], isLoading } = useQuery({
    queryKey: ["drug"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:4000/api/v1/customer/${drugCode}`
      );
      const data = await res.json();
      return data.drug;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="py-12 ">
      <h1 className="font-bold text-4xl text-center py-6">
        Drug Authenticity Check
      </h1>
      <div className="flex justify-center">
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body items-center text-center">
            {drug.length === 0 ? (
              <>
                <h2 className="card-title">Drug Not Found In The System...</h2>
                <p className="text-red-500 bg-neutral">
                  Please, Check the drug carefully!!!{" "}
                </p>
              </>
            ) : (
              <>
                <h2 className="card-title">Drug Name: {drug[0]?.drugName}</h2>
                <p className="text-green-500 bg-neutral">Status: Authentic</p>
                <p>Drug Code: {drug[0]?.drugCode}</p>
                <p>Dosage: {drug[0]?.drugDosage}</p>
                <div className="card-actions justify-end">
                  <p>Mfg Date: {drug[0]?.mfgDate}</p>
                  <p>Exp Date: {drug[0]?.expDate}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckAuthenticity;
