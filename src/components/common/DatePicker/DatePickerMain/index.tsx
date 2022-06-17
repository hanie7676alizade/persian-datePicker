import Header from "./Header";
import classes from "../DatePicker.module.scss";
import DaysOfMonth from "./DaysOfMonth";

interface Iprops {
  yearList: number[];
  weekDays: string[];
  canSelectPrevDate: boolean;
  currentMonth: number;
  currentYear: number;
  currentDay: number;
  selectedYear: number;
  selectedMonth: number;
  selectedDay: number | null;
  setselectedYear: (value: number) => void;
  setselectedMonth: (value: number) => void;
  setselectedDay: (value: number | null) => void;
  isPrevDay: (value: number | null) => boolean | undefined;
  setshowMessage: (value: boolean) => void;
}
const DatePickerMain = (props: Iprops) => {
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
        setshowMessage={props.setshowMessage}
      />
    </section>
  );
};
export default DatePickerMain;
