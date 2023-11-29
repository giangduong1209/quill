"use client";
import React from "react";
import UploadFileBtn from "./UploadFileBtn";
import { trpc } from "@/app/_trpc/client";
import { Ghost } from "lucide-react";

const Dashboard = () => {
  const { data: files, isLoading } = trpc.getUserFiles.useQuery();
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="flex flex-col justify-between items-start mt-8 gap-4 border-b border-gray-200 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-gray-900">My Files</h1>
        <UploadFileBtn />
      </div>
      {/* display all user files */}
      {files && files?.length !== 0 ? (
        <div></div>
      ) : isLoading ? (
        <div></div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-4">
          <Ghost className="h-8 w-8 text-zinc-800" />
          <h3 className="font-semibold text-xl">Pretty empty around here</h3>
          <p>Let&apos;s upload your first PDF.</p>
        </div>
      )}
    </main>
  );
};

export default Dashboard;
