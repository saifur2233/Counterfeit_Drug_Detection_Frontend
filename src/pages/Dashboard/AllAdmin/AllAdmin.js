import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../../shared/Loading/Loading";

const AllAdmin = () => {
  const [deletingAdmin, setDeletingAdmin] = useState(null);
  const closeModal = () => {
    setDeletingAdmin(null);
  };

  const {
    data: allAdmin = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allAdmin"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/api/v1/admin/alladmin`);
      const data = await res.json();
      return data.admin;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const hnadleDeleteUser = (admin) => {
    console.log(admin);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-secondary py-6">
        All Admin
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>User Type</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allAdmin.map((admin, i) => (
              <tr key={admin._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="font-bold">{admin.name}</div>
                </td>
                <td>{admin.email}</td>
                <td>{admin.password}</td>
                <td>{admin.userType}</td>
                <td>{admin.phone}</td>
                <td>
                  <label
                    onClick={() => setDeletingAdmin(admin)}
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

export default AllAdmin;
