import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../shared/Loading/Loading";

const ViewDistributorSendReq = () => {
  const [deletingUser, setDeletingUser] = useState(null);

  const {
    data: allSupplyReqInfo = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allSupplyReqInfo"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/api/v1/drugsupplyreq`);
      const data = await res.json();
      return data.allReqs;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center">
          View Distributor Send Request
        </h1>
        <div className="py-8">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>ReceiverName</th>
                  <th>ReceiverAddress</th>
                  <th>ReceiverType</th>
                  <th>SenderAddress</th>
                  <th>SenderType</th>
                  <th>Drug Name</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allSupplyReqInfo.map((info, i) => (
                  <tr key={info._id}>
                    <th>{i + 1}</th>
                    <td>
                      <div className="font-bold">{info.receiverName}</div>
                    </td>
                    <td>{info.receiverAddress}</td>
                    <td>{info.receiverType}</td>
                    <td>{info.senderAddress}</td>
                    <td>{info.senderType}</td>
                    <td>{info.drugName}</td>
                    <td>{info.message}</td>
                    <td>
                      <label
                        onClick={() => setDeletingUser(info)}
                        htmlFor="confirmationmodal"
                        className="btn btn-square btn-outline btn-error"
                      >
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
                      </label>
                    </td>
                  </tr>
                ))}
                {/* <tr>
                 
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
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDistributorSendReq;
