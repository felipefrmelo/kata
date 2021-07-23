import React from "react";
import Head from "next/head";

export default function Main({
  children,
}: React.BaseHTMLAttributes<HTMLDivElement>) {
  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className="flex-1 flex flex-col justify-center items-center bg-gray-300">
        {children}
      </main>
    </div>
  );
}
