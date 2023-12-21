import React from "react";
import { NextPage, NextPageContext } from "next";

const Error: NextPage<{ statusCode: number }> = ({ statusCode }) => {
  return (
    <div className="w-full h-[calc(100vh-150px)] grid place-items-center">
      <div className="page_text">
        <h1>{statusCode ?? "Client Side"} Page Error</h1>
        <p className="text-sm font-semibold">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : "An error occurred on client"}
        </p>
      </div>
      {/* <div className="ag-page-404">
        <div className="ag-toaster-wrap">
          <div className="ag-toaster">
            <div className="ag-toaster_back"></div>
            <div className="ag-toaster_front">
              <div className="js-toaster_lever ag-toaster_lever"></div>
            </div>
            <div className="ag-toaster_toast-handler">
              <div className="js-toaster_toast ag-toaster_toast js-ag-hide"></div>
            </div>
          </div>

          <canvas id="canvas-404" className="ag-canvas-404"></canvas>
          <img
            className="ag-canvas-404_img"
            src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/404-error-smoke-from-toaster/images/smoke.png"
            alt={"Error smoke"}
          />
        </div>
      </div> */}
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res
    ? res.statusCode
    : err
    ? (err.statusCode as number)
    : 404;
  return { statusCode };
};

export default Error;
