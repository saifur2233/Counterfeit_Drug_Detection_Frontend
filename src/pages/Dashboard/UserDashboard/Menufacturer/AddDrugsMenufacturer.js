import React, { useState } from "react";
import { toast } from "react-hot-toast";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

const AddDrugsMenufacturer = () => {
  const navigate = useNavigate();
  const [drugCode, setDrugCode] = useState("");

  const generateDrugCode = () => {
    setDrugCode(Math.floor(Math.random() * 10000000000 + 1));
  };

  // download qr code
  const download = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      // name of the image
      downloadLink.download = `${drugCode}`;
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  const handleAddDrug = (event) => {
    event.preventDefault();
    const form = event.target;
    const menufacturerName = form.menufacturerName.value;
    const drugName = form.drugName.value;
    const drugDosage = form.drugDosage.value;
    const drugQuantity = form.drugQuantity.value;
    const mfgDate = form.mfgDate.value;
    const expDate = form.expDate.value;

    const drug = {
      menufacturerName,
      drugName,
      drugCode,
      drugDosage,
      drugQuantity,
      mfgDate,
      expDate,
    };

    //console.log(drug);

    fetch("http://localhost:4000/api/v1/menufacturer/addDrug", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(drug),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        toast.success("Drug successfully added.");
        form.reset();
        navigate("/userdashboard/menuViewDrugDetails");
      });
  };
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center">
          Add Drugs of Menufacturer
        </h1>
        <div className="flex justify-center gap-12 py-10">
          <form
            onSubmit={handleAddDrug}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Menufacturer Name</span>
                </label>
                <input
                  type="text"
                  name="menufacturerName"
                  placeholder="Menufacturer Name"
                  className="input input-bordered"
                  required
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
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Drug Code</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={drugCode}
                    required
                    placeholder="#jrej456k"
                    className="input input-bordered"
                  />
                  <span
                    onClick={generateDrugCode}
                    className="btn btn-accent text-white"
                  >
                    GENERATE
                  </span>
                </label>
              </div>
              <div className="flex gap-3">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Drug Dosage</span>
                  </label>
                  <input
                    type="text"
                    name="drugDosage"
                    placeholder="Drug Dosage"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-1/2">
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mfg_Date</span>
                </label>
                <input
                  type="text"
                  name="mfgDate"
                  placeholder="Mfg_Date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Exp_Date</span>
                </label>
                <input
                  type="text"
                  name="expDate"
                  placeholder="Exp_Date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add to System</button>
              </div>
            </div>
          </form>
          <div className="py-20">
            <h1 className="font-bold text-3xl text-center py-6"> QR Code</h1>
            <div
              className="pb-6"
              style={{
                height: "auto",
                margin: "0 auto",
                maxWidth: 128,
                width: "100%",
              }}
            >
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                //value={`${drugCode}`}
                value={`http://localhost:3000/customer/${drugCode}`}
                viewBox={`0 0 256 256`}
                id="QRCode"
              />
            </div>
            <button onClick={download} className="btn btn-primary text-white">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDrugsMenufacturer;
