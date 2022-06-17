import moment from "jalali-moment";

import SliderBTN from "components/common/SliderBTN";
import classes from "../DatePicker.module.scss";

const Header = (props) => {
  moment.locale("fa");

  const MonthList = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  // let yearList = [];

  const currentFaYear = parseInt(moment().format("YYYY"));
  const currentFaMonth = parseInt(moment().format("M"));

  const setSelectedMonth = (index) => {
    props.setselectedMonth(index + 1);
  };
  const setselectedYear = (index) => {
    console.log(index, "setselectedYear");
    props.setselectedYear(index);
  };

  return (
    <header>
      <div>
        <SliderBTN
          list={MonthList}
          value={props.selectedMonth - 1}
          changeCurrentIndex={setSelectedMonth}
        />
      </div>
      <div>
        {!!props.yearList.length && (
          <SliderBTN
            list={props.yearList}
            value={props.selectedYear}
            changeCurrentIndex={setselectedYear}
          />
        )}
      </div>
    </header>
  );
};
export default Header;
