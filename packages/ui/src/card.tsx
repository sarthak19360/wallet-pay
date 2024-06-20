import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="border border-2 rounded-lg p-4">
      <h1 className="text-xl border-b pb-2 font-semibold">{title}</h1>
      <div>{children}</div>
    </div>
  );
}
