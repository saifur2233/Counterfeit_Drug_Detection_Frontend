import React, { useState } from "react";
import Loading from "../../../shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../shared/Modal/ConfirmationModal";

const AllMenufacturer = () => {
  const [deletingUser, setDeletingUser] = useState(null);
  const closeModal = () => {
    setDeletingUser(null);
  };

  const {
    data: allMenufacturers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allMenufacturers"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:4000/api/v1/admin/allmenufacturer`
      );
      const data = await res.json();
      return data.user;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const hnadleDeleteUser = (user) => {
    fetch(`http://localhost:4000/api/v1/admin/user/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user.deletedCount > 0) {
          closeModal();
          toast.success("User deleted succesfuly");
          refetch();
        }
      });
  };

  console.log(allMenufacturers);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-secondary py-6">
        All Menufacturer
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
            {allMenufacturers.map((menufacturer, i) => (
              <tr key={menufacturer._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="font-bold">{menufacturer.name}</div>
                </td>
                <td>{menufacturer.address}</td>
                <td>{menufacturer.userId}</td>
                <td>
                  <label
                    onClick={() => setDeletingUser(menufacturer)}
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
      {deletingUser && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you deleting user ${deletingUser.name}. You cannot undo it.`}
          closeModal={closeModal}
          successAction={hnadleDeleteUser}
          modalData={deletingUser}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllMenufacturer;
