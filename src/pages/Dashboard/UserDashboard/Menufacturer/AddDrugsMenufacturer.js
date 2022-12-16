import React from "react";

const AddDrugsMenufacturer = () => {
  const handleAddDrug = (event) => {
    event.preventDefault();
    const form = event.target;
    const drugName = form.drugName.value;
    const drugCode = form.drugCode.value;
    const drugWeight = form.drugWeight.value;
    const drugQuantity = form.drugQuantity.value;
    const price = form.price.value;
    console.log(drugName, drugCode, drugWeight, drugQuantity, price);
  };
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center">
          Add Drugs of Menufacturer
        </h1>
        <div className="flex justify-center py-10">
          <form
            onSubmit={handleAddDrug}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
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
                  <span className="label-text">Drug Code</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="drugCode"
                    placeholder="#jrej456k"
                    className="input input-bordered"
                  />
                  <span className="btn btn-accent text-white">GENERATE</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Drug Weight</span>
                </label>
                <input
                  type="text"
                  name="drugWeight"
                  placeholder="Drug Weight"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Drug Quantity</span>
                </label>
                <input
                  type="text"
                  name="drugQuantity"
                  placeholder="Drug Quantity"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Add to System</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDrugsMenufacturer;
