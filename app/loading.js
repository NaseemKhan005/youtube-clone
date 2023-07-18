"use client";
import CircularProgress from "@mui/material/CircularProgress";

const loading = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-screen -z-50">
        <CircularProgress className="text-primary" />
      </div>
    </>
  );
};

export default loading;
