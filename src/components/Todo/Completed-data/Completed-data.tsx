import { useSelector } from "react-redux";
import {
  useGetCompletedDataQuery,
  useDeleteTaskMutation,
  useUpdateCheckMutation,
} from "../../../controller/api";
import { checkActiveIndexForStyleForTabDiv } from "../../../utils/checkActiveIndexForTabDiv";
import { RootState } from "../../redux/store";
import Check from "../../common/Check/Check";
import { Task } from "../../../utils/Task";
import { ReactComponent as AnimateSpin } from "../../../assets/animate-spin.svg";

const CompletedData = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const activeIndex = useSelector((state: RootState) => state.active.value);
  const { data: completedData, isSuccess: completedSuccess } =
    useGetCompletedDataQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateCheck] = useUpdateCheckMutation();
  const handleCheck = (element: Task) => {
    updateCheck({ ...element, checked: !element.checked });
  };
  return (
    <>
      {" "}
      <div className={`${checkActiveIndexForStyleForTabDiv(activeIndex, 3)}`}>
        {completedData ? (
          <>
            {completedSuccess ? (
              <>
                {completedData?.result.map((element, index) => (
                  <div
                    className={
                      dark
                        ? `group/div h-[18%] grid grid-cols-12 border-b border-slate-700 p-3`
                        : `group/div h-[18%] grid grid-cols-12 border-b p-3`
                    }
                    key={element.id}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="flex items-center ">
                      <div className="flex items-center">
                        {" "}
                        <Check
                          checked={element.checked}
                          handleCheck={() => handleCheck(element)}
                        />
                      </div>
                    </div>
                    <div className=" col-span-10 flex items-center">
                      <div className="ms-5">
                        <p
                          className={
                            dark
                              ? "line-through text-gray-600"
                              : "line-through text-gray-400"
                          }
                        >
                          {element.name}
                        </p>
                      </div>
                    </div>
                    <div className=" flex justify-center items-center">
                      <div>
                        <button
                          onClick={() => {
                            deleteTask(element.id);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="gray"
                            className={`group-hover/div:block w-8 h-8 hidden `}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>something went wrong</>
            )}
          </>
        ) : (
          <>
            <div className="h-full w-full flex justify-center items-center">
             <AnimateSpin/>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CompletedData;
