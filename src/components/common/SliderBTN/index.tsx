import { useState } from "react";
import classes from "./SliderBTN.module.scss";

interface Iprops {
  list: string[] | number[];
  value: number;
  changeCurrentIndex: (value: number) => void;
}
const SliderBTN = (props: Iprops) => {
  const [showList, setShowList] = useState(false);
  const decIndex = () => {
    if (props.value === 0) {
      // setindex(props.list.length - 1);
      props.changeCurrentIndex(props.list.length - 1);
    } else {
      // setindex(index - 1);
      props.changeCurrentIndex(props.value - 1);
    }
  };

  const incIndex = () => {
    if (props.value === props.list.length - 1) {
      props.changeCurrentIndex(0);
    } else {
      props.changeCurrentIndex(props.value + 1);
    }
  };
  const onSelectItem = (index: number) => {
    setShowList(false);
    props.changeCurrentIndex(index);
  };
  return (
    <div className={classes.wrapper}>
      <button onClick={incIndex} id="changeDateBTN"></button>

      <p onClick={() => setShowList(!showList)}>{props.list[props.value]}</p>
      {showList && (
        <ul>
          {props.list.map((item, index) => {
            return (
              <li
                key={item}
                onClick={() => onSelectItem(index)}
                style={{ top: `${index - props.value}px` }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
      <button onClick={decIndex} id="changeDateBTN"></button>
    </div>
  );
};
export default SliderBTN;
