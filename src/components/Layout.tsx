import imagee from "./../images/bg-desktop-dark.jpg";
import lightt from "./../images/bg-desktop-light.jpg";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

interface ILayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: ILayoutProps) => {
  const dark: boolean = useSelector((state: RootState) => state.theme.dark);
  return (
    <>
      <div style={{ height: "100vh" }} className="relative flex flex-col">
        <div
          className="flex justify-center"
          style={{
            backgroundImage: !dark ? `url(${lightt})` : `url(${imagee})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "19em",
          }}
        ></div>
        <div
          style={{ flex: 1 }}
          //className={dark ? "bg-red-200 " : "bg-slate-900"}
          className={dark ? "bg-slate-900" : " bg-slate-50"}
        ></div>
        <div
          style={{ minHeight: "600px" }}
          className="flex w-full justify-center  ps-4 pe-4 absolute"
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
