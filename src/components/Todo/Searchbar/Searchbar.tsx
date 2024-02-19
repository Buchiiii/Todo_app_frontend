import { useSelector } from "react-redux";
import Check from "../../common/Check/Check";
import { RootState } from "../../redux/store";
import { useState } from "react";
import { usePostDataMutation } from "../../../controller/api";

const Searchbar = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const [task, setTask] = useState("");
  const [postData] = usePostDataMutation();
  const [checked, setChecked] = useState(false);
  const keydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      postData({ name: task, checked: checked });
      setTask("");
    }
  };

  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div
        id="searchBox"
        className={
          dark
            ? "flex  rounded-lg p-3 mb-[25px] bg-slate-800"
            : "flex rounded-lg p-3   mb-[25px]  bg-slate-100"
        }
      >
        <div className="flex  w-[100%]  ">
          <Check handleCheck={handleCheck} />
          <div style={{ flex: 1 }} className="">
            <input
              type="text"
              value={task}
              name="input"
              id="input"
              placeholder="Type something"
              onKeyDown={keydown}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              className={
                dark
                  ? "h-90  border-none w-[100%] flex bg-slate-800 text-slate-50 shadow-none mr-2 text-xl ps-4 focus: outline-none"
                  : "h-90  border-none w-[100%] flex bg-slate-100 shadow-none mr-2 text-xl ps-4 focus: outline-none"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
