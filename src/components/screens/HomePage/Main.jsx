import moment from "jalali-moment";

import DatePicker from "components/common/DatePicker";
import classes from "./HomePage.module.scss";

const MainComponent = () => {
  moment.locale("fa");

  const weekDays = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];

  let yearList = [];

  const currentFaYear = parseInt(moment().format("YYYY"));

  (function getYearList() {
    for (let i = currentFaYear; yearList.length < 10; i++) {
      yearList = [...yearList, i];
    }
  })();

  const changeDate = (value) => {
    // console.log(value);
    // props.onSetDatePickerValue(value ? value.toDate().getTime() : null);
  };

  return (
    <section className={classes.mainWrapper}>
      <DatePicker
        yearList={yearList}
        weekDays={weekDays}
        placeholder="label"
        defaultValue={null}
        onChange={changeDate}
        canSelectPrevDate={false}
      />
    </section>
  );
};

export default MainComponent;
