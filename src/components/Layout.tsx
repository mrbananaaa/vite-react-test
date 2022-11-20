import { IChildren } from "src/types/components";
import { Navbar } from "./Navbar";


const Layout = ({ children }: IChildren) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center font-bold text-4xl text-black from-slate-100 via-slate-200 to-white bg-gradient-to-br dark:from-black dark:to-black/80 select-none">
        {children}
      </div>
    </>
  );
};

export default Layout;
