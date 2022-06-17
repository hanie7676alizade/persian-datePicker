import moment from "jalali-moment";

import SliderBTN from "components/common/SliderBTN";

interface Iprops {
  yearList: number[];
  currentMonth: number;
  selectedYear: number;
  selectedMonth: number;
  setselectedYear: (value: number) => void;
  setselectedMonth: (value: number) => void;
}
const Header = (props: Iprops) => {
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

  const setSelectedMonth = (index: number) => {
    props.setselectedMonth(index + 1);
  };
  const setselectedYear = (index: number) => {
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
