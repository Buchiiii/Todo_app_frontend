import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./index.css";

interface ICheckProps {
  handleCheck?: () => void;
  checked?: boolean;
}
const Check = ({ handleCheck, checked }: ICheckProps) => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <>
      <label className="container">
        <input
          checked={checked}
          type="checkbox"
          name="taskCheck"
          id="taskCheck"
          onChange={handleCheck}
        />

        <span
          style={{
            border: dark ? "2px solid grey" : "2px solid  rgb(203 213 225)",
          }}
          className="checkmark"
        >
          <div className="containerForSvg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              color="white"
              viewBox="0 0 24 24"
              strokeWidth={5}
              stroke="currentColor"
              className="svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </div>
        </span>
      </label>
    </>
  );
};

export default Check;
