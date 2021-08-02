import React from "react";

export default function Detail({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Detail</h1>
      <h2>GIF con id {params.id}</h2>
    </div>
  );
}
