import React from "react";

export default function BlogLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="container flex flex-col justify-center items-center">
        <div>
          <h1>Blog Section</h1>
        </div>
        <br />
        <div className="flex justify-center items-center">
          {children}
        </div>
      </div>
    </main>
  );
}
