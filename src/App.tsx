import { Routes } from "./routes";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes />
    </>
  );
};
