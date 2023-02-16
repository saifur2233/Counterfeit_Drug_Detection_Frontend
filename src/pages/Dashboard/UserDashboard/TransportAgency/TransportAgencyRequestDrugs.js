import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TransportAgencyRequestDrugs = () => {
  const navigate = useNavigate();
  const handleRequestDrug = (event) => {
    event.preventDefault();
    const form = event.target;
    const drugName = form.drugName.value;
    const message = form.message.value;
    const receiverName = form.receiverName.value;
    const receiverAddress = form.receiverAddress.value;
    const receiverType = form.receiverType.value;
    const senderAddress = form.senderAddress.value;
    const senderType = "TransportAgency";
    const reqObj = {
      receiverName,
      receiverAddress,
      receiverType,
      senderAddress,
      senderType,
      drugName,
      message,
    };
    console.log(reqObj);

    fetch("http://localhost:4000/api/v1/drugsupplyreq", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reqObj),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        toast.success("Drug request successfully send.");
        form.reset();
        navigate("/userdashboard/distributorSendReq");
      });
  };
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center">
          Request Drugs of TransportAgency
        </h1>
        <div className="flex justify-center py-10">
          <form
            onSubmit={handleRequestDrug}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Receiver Name</span>
                </label>
                <input
                  type="text"
                  name="receiverName"
                  placeholder="Receiver Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Receiver Address</span>
                </label>
                <input
                  type="text"
                  name="receiverAddress"
                  placeholder="Receiver Address"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Receiver Type</span>
                </label>
                <select
                  name="receiverType"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Select Receiver
                  </option>
                  <option value="Menufacturer">Menufacturer</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Retailer">Retailer</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sender Address</span>
                </label>
                <input
                  type="text"
                  name="senderAddress"
                  placeholder="Sender Address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Drug Name</span>
                </label>
                <input
                  type="text"
                  name="drugName"
                  placeholder="Drug Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  className="textarea textarea-bordered"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Drug Request</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransportAgencyRequestDrugs;
