import { useState, useEffect } from "react";
import imagee from "./../images/bg-desktop-dark.jpg";
import lightt from "./../images/bg-desktop-light.jpg";

import {
  useClearCompletedMutation,
  useDeleteTaskMutation,
  useGetActiveDataQuery,
  useGetCompletedDataQuery,
  usePostDataMutation,
  useUpdateCheckMutation,
} from "../controller/api";
import { checkActiveIndexForStyle } from "../functions/checkActiveIndexForStyle";

import { useGetDataQuery } from "../controller/api";

export const Todo = () => {
  const { data, isSuccess } = useGetDataQuery();
  const {
    data: activeData,

    isSuccess: activeSuccess,
  } = useGetActiveDataQuery();
  const { data: completedData, isSuccess: completedSuccess } =
    useGetCompletedDataQuery();

  const [dark, setDark] = useState(false);
  const [task, setTask] = useState("");
  const [activeIndex, setActiveIndex] = useState(1);
  const [checked, setChecked] = useState(false);
  const [postData] = usePostDataMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateCheck] = useUpdateCheckMutation();
  const [clearCompleted] = useClearCompletedMutation();

  const setDarkFunction = () => {
    setDark(!dark);
  };

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const checkActiveIndexForStyleForTabDiv = (id: number) => {
    if (activeIndex === id) {
      return "overflow-y-auto h-full block";
    } else {
      return "hidden";
    }
  };

  const checkActiveIndexForItems = () => {
    if (activeIndex === 1) {
      if (data) {
        if (data?.length === 1) {
          return `${data?.length} item left`;
        } else {
          return `${data?.length} items left`;
        }
      } else {
        return `- items left`;
      }
    } else if (activeIndex === 2) {
      if (activeData) {
        if (data?.length === 1) {
          return `${activeData?.length} item left`;
        } else {
          return `${activeData?.length} items left`;
        }
      } else {
        return `- items left`;
      }
    } else {
      if (completedData) {
        if (data?.length === 1) {
          return `${completedData?.length} item left`;
        } else {
          return `${completedData?.length} items left`;
        }
      } else {
        return `- items left`;
      }
    }
  };

  const keydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      postData({ name: task, checked: checked });
      setTask("");
    }
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };

  useEffect(() => {});
  return (
    <>
      <div className="h-screen relative ">
        <>
          {" "}
          <div
            className="flex justify-center h-40 z-0"
            style={
              dark
                ? {
                    backgroundImage: `url(${imagee})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }
                : {
                    backgroundImage: `url(${lightt})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }
            }
          >
            <div className="grid items-center h-50 w-40 ">
              <div className="grid  grid-cols-2">
                <div className="">
                  <h1 className="font-mono text-7xl font-medium text-white tracking-widest">
                    TODO
                  </h1>
                </div>
                <div className="grid  justify-end">
                  <button
                    onClick={() => {
                      setDarkFunction();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-6 h-6"
                    >
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={dark ? "h-60 bg-slate-900" : "z-0 h-60 bg-slate-50"}
          ></div>
        </>

        <>
          <div className="absolute h-80 w-full  top-[20%]">
            <div className=" rounded-sm  shadow-lg z-50 h-60 mx-auto w-80 sm:w-70 md:w-70 lg:w-60 xl:w-40 2xl:w-40 ">
              <div
                className={
                  dark
                    ? " mb-6 rounded-md shadow-lg h-15  bg-slate-800 grid grid-cols-12"
                    : "mb-6 rounded-lg shadow-lg h-15  bg-slate-50 grid grid-cols-12"
                }
              >
                {" "}
                <div className="flex h-100  items-center justify-center">
                  <input
                    type="checkbox"
                    className={
                      dark
                        ? "peer relative appearance-none border-2 border-slate-700 h-50 ms-3 mt-1 w-7 rounded-full checked:bg-gradient-to-r from-blue-400 via-indigo-400 to-indigo-500"
                        : "peer relative appearance-none border-2 border-slate-200 h-50 ms-3 mt-1 w-7 rounded-full checked:bg-gradient-to-r from-blue-400 via-indigo-400 to-indigo-500"
                    }
                    name="taskCheck"
                    id="taskCheck"
                    onChange={handleCheck}
                  />
                  <svg
                    className="
      absolute
      w-4 h-4 mt-1 ms-3
      hidden peer-checked:block
      pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="col-span-11 ">
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
                        ? "w-90 h-80 mt-2 border-none bg-slate-800 text-slate-50 shadow-none mr-2 text-xl ps-4 focus: outline-none"
                        : "w-90 h-80 mt-2 border-none bg-slate-50 shadow-none mr-2 text-xl ps-4 focus: outline-none"
                    }
                  />
                </div>
              </div>
              <div
                className={
                  dark
                    ? " rounded-lg shadow-lg h-full w-100 bg-slate-800 grid grid-rows-6"
                    : "rounded-lg shadow-lg h-full w-100 bg-slate-50 grid grid-rows-6"
                }
              >
                <div className="row-span-5 ">
                  {/*IF THE ACTIVE INDEX IS 1 */}{" "}
                  <div className={`${checkActiveIndexForStyleForTabDiv(1)}`}>
                    {data ? (
                      <>
                        {isSuccess ? (
                          <>
                            {" "}
                            {data?.result.map((element, index) => (
                              <div
                                className={
                                  dark
                                    ? `group/div h-[18%] grid grid-cols-12 border-b border-slate-700`
                                    : `group/div h-[18%] grid grid-cols-12 border-b`
                                }
                                key={element.id}
                                style={{ cursor: "pointer" }}
                              >
                                <div className="flex justify-center items-center ">
                                  <>
                                    <input
                                      checked={element.checked}
                                      type="checkbox"
                                      className={
                                        dark
                                          ? "peer/checkbox relative appearance-none border-2 border-slate-700 h-50 ms-3 mt-1 w-7 rounded-full checked:bg-gradient-to-r from-blue-400 via-indigo-400 to-indigo-500"
                                          : "peer/checkbox relative appearance-none border-2 border-slate-200 h-50 ms-3 mt-1 w-7 rounded-full checked:bg-gradient-to-r from-blue-400 via-indigo-400 to-indigo-500"
                                      }
                                      name="allCHeck"
                                      // value={element.checked}
                                      id="allCheck"
                                      //onChange={handleCheck}
                                      onChange={() => {
                                        updateCheck({
                                          ...element,
                                          checked: !element.checked,
                                        });
                                      }}
                                    />
                                    <svg
                                      className="
    absolute
    w-3 h-3 mt-1 ms-3
    hidden peer-checked/checkbox:block
    pointer-events-none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="white"
                                      strokeWidth="5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                  </>
                                </div>
                                <div className=" col-span-10 flex items-center">
                                  <div className="ms-5">
                                    {element.checked == true ? (
                                      <p
                                        className={
                                          dark
                                            ? "line-through text-gray-500"
                                            : "line-through text-gray-400"
                                        }
                                      >
                                        {element.name}
                                      </p>
                                    ) : (
                                      <p className={dark ? "text-white" : ""}>
                                        {element.name}
                                      </p>
                                    )}
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
                          <> something went wrong</>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="h-full w-full flex justify-center items-center">
                          <svg
                            className="animate-spin"
                            fill="none"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              fill="currentColor"
                              fillRule="evenodd"
                              opacity="0.2"
                            />
                            <path
                              d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </>
                    )}
                  </div>
                  {/* IF THE ACTIVE INDEX IS 2 -*/}
                  <div className={`${checkActiveIndexForStyleForTabDiv(2)}`}>
                    {activeData ? (
                      <>
                        {activeSuccess ? (
                          <>
                            {" "}
                            <>
                              {activeData?.result.map((element, index) => (
                                <div
                                  className={
                                    dark
                                      ? `group/div h-[18%] grid grid-cols-12 border-b border-slate-700`
                                      : `group/div h-[18%] grid grid-cols-12 border-b`
                                  }
                                  key={element.id}
                                  style={{ cursor: "pointer" }}
                                >
                                  <div className="flex justify-center items-center ">
                                    <>
                                      <input
                                        checked={element.checked}
                                        type="checkbox"
                                        className={
                                          dark
                                            ? "peer/checkbox relative appearance-none border-2 border-slate-700 h-50 ms-3 mt-1 w-7 rounded-full checked:bg-gradient-to-r from-blue-400 via-indigo-400 to-indigo-500"
                                            : "peer/checkbox relative appearance-none border-2 border-slate-200 h-50 ms-3 mt-1 w-7 rounded-full checked:bg-gradient-to-r from-blue-400 via-indigo-400 to-indigo-500"
                                        }
                                        name="activeCheck"
                                        id="activeCheck"
                                        onChange={() => {
                                          updateCheck({
                                            ...element,
                                            checked: !element.checked,
                                          });
                                        }}
                                      />
                                      <svg
                                        className="
    absolute
    w-3 h-3 mt-1 ms-3
    hidden peer-checked/checkbox:block
    pointer-events-none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                      </svg>
                                    </>
                                  </div>
                                  <div className=" col-span-10 flex items-center">
                                    <div className="ms-5">
                                      <p className={dark ? "text-white" : ""}>
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
                          </>
                        ) : (
                          <>something went wrong</>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="h-full w-full flex justify-center items-center">
                          <svg
                            className="animate-spin"
                            fill="none"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              fill="currentColor"
                              fillRule="evenodd"
                              opacity="0.2"
                            />
                            <path
                              d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </>
                    )}
                  </div>{" "}
                  {/*IF THE ACTIVE INDEX IS 3 FOR DARK*/}
                  <div className={`${checkActiveIndexForStyleForTabDiv(3)}`}>
                    {completedData ? (
                      <>
                        {completedSuccess ? (
                          <>
                            {completedData?.result.map((element, index) => (
                              <div
                                className={
                                  dark
                                    ? `group/div h-[18%] grid grid-cols-12 border-b border-slate-700`
                                    : `group/div h-[18%] grid grid-cols-12 border-b`
                                }
                                key={element.id}
                                style={{ cursor: "pointer" }}
                              >
                                <div className="flex justify-center items-center ">
                                  <>
                                    <input
                                      checked={element.checked}
                                      type="checkbox"
                                      className={
                                        dark
                                          ? "peer/checkbox relative appearance-none border-2 border-slate-700 h-50 ms-3 mt-1 w-7 rounded-full checked:bg-gradient-to-r from-blue-400 via-indigo-400 to-indigo-500"
                                          : "peer/checkbox relative appearance-none border-2 border-slate-200 h-50 ms-3 mt-1 w-7 rounded-full checked:bg-gradient-to-r from-blue-400 via-indigo-400 to-indigo-500"
                                      }
                                      name="completedCheck"
                                      id="completedCheck"
                                      onChange={() =>
                                        updateCheck({
                                          ...element,
                                          checked: !element.checked,
                                        })
                                      }
                                    />
                                    <svg
                                      className="
    absolute
    w-3 h-3 mt-1 ms-3
    hidden peer-checked/checkbox:block
    pointer-events-none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="white"
                                      strokeWidth="5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                  </>
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
                          <svg
                            className="animate-spin"
                            fill="none"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              fill="currentColor"
                              fillRule="evenodd"
                              opacity="0.2"
                            />
                            <path
                              d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div
                  className={
                    dark
                      ? "border-t-2 border-slate-700  grid grid-cols-4"
                      : "border-t-2  grid grid-cols-4"
                  }
                >
                  <div className=" flex justify-center items-center">
                    {}{" "}
                    <p className="text-gray-400">
                      {checkActiveIndexForItems()}
                    </p>
                  </div>
                  <div className=" col-span-2 flex justify-center items-center">
                    <div className="w-80">
                      <div className=" grid grid-cols-3 justify-items-center">
                        <div>
                          <button
                            key={1}
                            className={`${checkActiveIndexForStyle(
                              activeIndex,
                              1,
                              dark
                            )}`}
                            onClick={() => {
                              handleTabClick(1);
                            }}
                          >
                            All
                          </button>
                        </div>
                        <div>
                          <button
                            key={2}
                            className={`${checkActiveIndexForStyle(
                              activeIndex,
                              2,
                              dark
                            )}`}
                            onClick={() => {
                              handleTabClick(2);
                            }}
                          >
                            Active
                          </button>
                        </div>
                        <div>
                          <button
                            key={3}
                            className={`${checkActiveIndexForStyle(
                              activeIndex,
                              3,
                              dark
                            )}`}
                            onClick={() => {
                              handleTabClick(3);
                            }}
                          >
                            Completed
                          </button>
                        </div>
                      </div>
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
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};
