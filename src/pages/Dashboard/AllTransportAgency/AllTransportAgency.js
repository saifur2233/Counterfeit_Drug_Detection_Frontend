import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../../shared/Loading/Loading";

const AllTransportAgency = () => {
  const [deletingUser, setDeletingUser] = useState(null);
  const closeModal = () => {
    setDeletingUser(null);
  };

  const {
    data: allTransportagency = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allTransportagency"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:4000/api/v1/admin/alltransportagency`
      );
      const data = await res.json();
      return data.user;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const hnadleDeleteUser = (user) => {
    console.log(user);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-secondary py-6">
        All Transport Agency
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Address</th>
              <th>UserId</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allTransportagency.map((transportagency, i) => (
              <tr key={transportagency._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="font-bold">{transportagency.name}</div>
                </td>
                <td>{transportagency.address}</td>
                <td>{transportagency.userId}</td>
                <td>
                  <label
                    onClick={() => setDeletingUser(transportagency)}
                    htmlFor="confirmationmodal"
                    className="btn btn-outline btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTransportAgency;
