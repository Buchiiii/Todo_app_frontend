import { useDispatch, useSelector } from "react-redux";
import {
  useGetActiveDataQuery,
  useGetCompletedDataQuery,
  useClearCompletedMutation,
  useGetDataQuery,
} from "../../../controller/api";
import { checkActiveIndexForItems } from "../../../utils/checkActiveIndexForItems";
import { checkActiveIndexForStyle } from "../../../utils/checkActiveIndexForStyle";
import { changeActive } from "../../redux/slices/active";
import { RootState } from "../../redux/store";

const Footer = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const activeIndex = useSelector((state: RootState) => state.active.value);
  const dispatch = useDispatch();
  const { data } = useGetDataQuery();
  const { data: activeData } = useGetActiveDataQuery();
  const { data: completedData } = useGetCompletedDataQuery();
  const [clearCompleted] = useClearCompletedMutation();

  return (
    <>
      <div className=" flex justify-center items-center">
        {}{" "}
        <p className="text-gray-400">
          {activeIndex === 1 ? checkActiveIndexForItems(data) : <></>}
          {activeIndex === 2 ? checkActiveIndexForItems(activeData) : <></>}
          {activeIndex === 3 ? checkActiveIndexForItems(completedData) : <></>}
        </p>
      </div>
      <div className="md:col-span-2 flex">
        <div style={{ flex: 1 }} className="flex justify-center ">
          <button
            key={1}
            className={`${checkActiveIndexForStyle(activeIndex, 1, dark)}`}
            onClick={() => {
              dispatch(changeActive(1));
            }}
          >
            All
          </button>
        </div>
        <div style={{ flex: 1 }} className="flex justify-center ">
          <button
            key={2}
            className={`${checkActiveIndexForStyle(activeIndex, 2, dark)}`}
            onClick={() => {
              dispatch(changeActive(2));
            }}
          >
            Active
          </button>
        </div>
        <div style={{ flex: 1 }} className="flex justify-center ">
          <button
            key={3}
            className={`${checkActiveIndexForStyle(activeIndex, 3, dark)}`}
            onClick={() => {
              dispatch(changeActive(3));
            }}
          >
            Completed
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            clearCompleted();
          }}
          className={
            dark
              ? "text-gray-400 hover:text-slate-50"
              : "text-gray-400 hover:text-gray-800"
          }
        >
          Clear completed
        </button>
      </div>
    </>
  );
};

export default Footer;
