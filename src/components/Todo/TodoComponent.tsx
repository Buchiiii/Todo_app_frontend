import { useSelector } from "react-redux";
import Header from "./Header/Header";
import Searchbar from "./Searchbar/Searchbar";
import { RootState } from "../redux/store";
import AllData from "./All-data/All-data";
import ActiveData from "./Active-data/Active-data";
import CompletedData from "./Completed-data/Completed-data";
import Footer from "./Footer/Footer";

const TodoComponent = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const activeIndex = useSelector((state: RootState) => state.active.value);

  return (
    <>
      <div style={{ width: "620px" }} className="mydiv pt-[50px] flex flex-col">
        <Header />
        <div
          style={{ borderRadius: "20px", flex: 1 }}
          className=" flex flex-col  rounded-lg mt-[35px] "
        >
          <Searchbar />
          <div
            style={{ flex: 1, borderRadius: "10px" }}
            className={
              dark
                ? "flex flex-col  bg-slate-800 shadow"
                : "flex flex-col  bg-slate-50 shadow"
            }
          >
            <div style={{ flex: 1 }} className="">
              {activeIndex === 1 ? <AllData /> : <></>}
              {activeIndex === 2 ? <ActiveData /> : <></>}
              {activeIndex === 3 ? <CompletedData /> : <></>}
            </div>
            <div
              style={{ minHeight: "50px" }}
              className=" grid flex grid-cols-1 md:grid-cols-4 sm:grid-cols-3 border-t-2"
            >
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoComponent;
