import { useState } from "react";
import classes from "./SliderBTN.module.scss";

const SliderBTN = (props) => {
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
  const onSelectItem = (index) => {
    setShowList(false);
    props.changeCurrentIndex(index);
  };
  return (
    <div className={classes.wrapper}>
      <button onClick={incIndex}></button>

      <p onClick={() => setShowList(!showList)}>{props.list[props.value]}</p>
      {showList && (
        <ul>
          {props.list.map((item, index) => {
            console.log(`${index - props.value * 27}`);
            return (
              <li
                onClick={() => onSelectItem(index)}
                style={{ top: `${index - props.value}px` }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
      <button onClick={decIndex}></button>
    </div>
  );
};
export default SliderBTN;
