import React, { useState } from "react";
import QrScanner from "qr-scanner";
import { toast } from "react-hot-toast";

const DrugVerify = () => {
  const [result, setResult] = useState("");
  //  const [scanResultWebCam, setScanResultWebCam] = useState("");

  // read qr code
  const readCode = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    QrScanner.scanImage(file, { returnDetailedScanResult: true })
      .then((result) => setResult(result.data))
      .catch((e) => {
        toast.error({ data: e || "No QR code found." });
        setResult("");
      });
  };

  //console.log(scanResultWebCam);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/tcrHVPf/Screenshot-2023-02-09-191518-removebg-preview.png"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="qrCodeScanning"
        />
        <div className="text-center">
          <h1 className="text-5xl font-bold">Drug QR Code Scanning</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <div className="flex flex-col w-full border-opacity-50">
            <div className="flex justify-center">
              <img
                src="https://i.ibb.co/NjHSLLK/camera.png"
                alt="cameraicon"
                className="max-w-xs rounded-sm shadow-2xl"
              />
            </div>
            <div className="divider">OR</div>
            <div className="flex justify-center">
              <input
                type="file"
                onChange={(e) => readCode(e)}
                className="file-input file-input-bordered file-input-primary w-1/2"
              />
            </div>
            {result && (
              <>
                <div className="py-4 flex justify-center">
                  <a href={result} className="link link-primary">
                    {result}
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugVerify;
