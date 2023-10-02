import React from "react";

export async function getStaticParams() {
  const names: string[] = [
    "zia",
    "zeeshan",
    "hira",
  ];

  return names.map((name) => ({
    name: name,
  }));
}

export default function AuthorsPage({
  params,
  searchParams,
}: {
  params: {author: string};
  searchParams: {id: string};
}) {
  // console.log("Params: ", params.author)
  return <div className="flex container justify-center items-center">My name is {params.author}.</div>;
}
