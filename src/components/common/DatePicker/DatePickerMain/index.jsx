import Header from "./Header";
import classes from "../DatePicker.module.scss";
import DaysOfMonth from "./DaysOfMonth";

const DatePickerMain = (props) => {
  return (
    <section className={classes.mainWrapper}>
      <Header
        yearList={props.yearList}
        currentMonth={props.currentMonth}
        selectedMonth={props.selectedMonth}
        selectedYear={props.selectedYear}
        setselectedMonth={props.setselectedMonth}
        setselectedYear={props.setselectedYear}
      />
      <DaysOfMonth
        canSelectPrevDate={props.canSelectPrevDate}
        yearList={props.yearList}
        currentMonth={props.currentMonth}
        currentYear={props.currentYear}
        currentDay={props.currentDay}
        weekDays={props.weekDays}
        selectedYear={props.selectedYear}
        selectedMonth={props.selectedMonth}
        selectedDay={props.selectedDay}
        setselectedDay={props.setselectedDay}
        setselectedMonth={props.setselectedMonth}
        isPrevDay={props.isPrevDay}
      />
    </section>
  );
};
export default DatePickerMain;
