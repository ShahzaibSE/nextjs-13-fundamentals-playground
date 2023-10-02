import React from "react";

export default function AddressPage({params, searchParams}: {params: {address: string}, searchParams: {id: string}}) {
  // console.log("Search Params:", searchParams);
  // console.log("Params:", params);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>I live in {params.address}{searchParams.id == null ? "" : ` ${searchParams.id}`}, Pakistan</h1>
    </div>
  );
}
