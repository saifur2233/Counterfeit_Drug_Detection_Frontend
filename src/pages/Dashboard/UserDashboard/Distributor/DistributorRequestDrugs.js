import React from "react";

const DistributorRequestDrugs = () => {
  const handleRequestDrug = (event) => {
    event.preventDefault();
    const form = event.target;
    const drugName = form.drugName.value;
    const quantity = form.quantity.value;
    const menuName = form.menuName.value;
    console.log(drugName, quantity, menuName);
  };
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center">
          Request Drugs of Distributor
        </h1>
        <div className="flex justify-center py-10">
          <form
            onSubmit={handleRequestDrug}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Menufacturer Name</span>
                </label>
                <input
                  type="text"
                  name="menuName"
                  placeholder="Menufacturer Name"
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
                <button className="btn btn-secondary">Drug Request</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DistributorRequestDrugs;
