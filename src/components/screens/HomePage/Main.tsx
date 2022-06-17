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

  let yearList: number[] = [];

  const currentFaYear = parseInt(moment().format("YYYY"));

  (function getYearList() {
    for (let i = currentFaYear; yearList.length < 10; i++) {
      yearList = [...yearList, i];
    }
  })();

  const changeDate = (value: string) => {
    // console.log(value, "date changed", moment(value).valueOf());
    // API call and etc for saving date...
  };

  return (
    <section className={classes.mainWrapper}>
      <DatePicker
        yearList={yearList}
        weekDays={weekDays}
        placeholder="label"
        defaultValue={undefined}
        onChange={changeDate}
        canSelectPrevDate={false}
      />
    </section>
  );
};

export default MainComponent;
