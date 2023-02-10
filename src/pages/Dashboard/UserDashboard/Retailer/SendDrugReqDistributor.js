import React from "react";

const SendDrugReqDistributor = () => {
  const handleRequestDrug = (event) => {
    event.preventDefault();
    const form = event.target;
    const drugName = form.drugName.value;
    const quantity = form.quantity.value;
    const distributorAddress = form.distributorAddress.value;
    const distributorName = form.distributorName.value;
    console.log(drugName, quantity, distributorName, distributorAddress);
  };
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center">
          Send Drug Request to Distributor
        </h1>
        <div className="flex justify-center py-10">
          <form
            onSubmit={handleRequestDrug}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Distributor Name</span>
                </label>
                <input
                  type="text"
                  name="distributorName"
                  placeholder="Distributor Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Distributor Address</span>
                </label>
                <input
                  type="text"
                  name="distributorAddress"
                  placeholder="Distributor Address"
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
                  <span className="label-text">Drug Quantity</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="Drug Quantity"
                  className="input input-bordered"
                />
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

export default SendDrugReqDistributor;
