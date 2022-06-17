import { useRef } from "react";
import { useState } from "react";
import moment from "jalali-moment";

import classes from "./DatePicker.module.scss";
import DatePickerMain from "./DatePickerMain";

const DatePicker = (props) => {
  moment.locale("fa");

  const inputRef = useRef(null);

  const currentYear = parseInt(moment().format("YYYY"));
  const currentMonth = parseInt(moment().format("M"));
  const currentDay = parseInt(moment().format("D"));

  const [selectedDay, setselectedDay] = useState(null);
  const [selectedMonth, setselectedMonth] = useState(currentMonth);
  const [selectedYear, setselectedYear] = useState(
    props.yearList.indexOf(currentYear)
  );

  const [showDatePicker, setShowDatePicker] = useState(false);

  const datePickerSection = useRef(null);

  const toggleShowingDatePicker = (event) => {
    setShowDatePicker(!showDatePicker);
  };

  const hideDatePicker = (event) => {
    console.log(event.relatedTarget, datePickerSection.current);
    if (!event || event.relatedTarget !== datePickerSection.current) {
      setTimeout(() => {
        setShowDatePicker(!showDatePicker);
      }, 180);
    }
  };
  const setInputDate = (year, month, day) => {
    console.log(props.yearList[year] + "/" + month + "/" + day, "update input");
    if (!!day) {
      inputRef.current.value = props.yearList[year] + "/" + month + "/" + day;
    }
  };
  const onSelectYear = (year = selectedYear) => {
    setselectedYear(year);
    setInputDate(year, selectedMonth, selectedDay);
  };

  const onSelectMonth = (month = selectedMonth) => {
    setselectedMonth(month);
    setInputDate(selectedYear, month, selectedDay);
  };

  const onSelectDay = (day = selectedDay) => {
    if (!!day) {
      if (!(!props.canSelectPrevDate && isPrevDay(day))) {
        setselectedDay(day);
        setInputDate(selectedYear, selectedMonth, day);
      } else {
        setselectedDay(null);
        setInputDate("", "", "");
      }
      hideDatePicker();
    }
  };

  const isPrevDay = (day) => {
    console.log(
      (props.yearList[selectedYear] === currentYear &&
        selectedMonth === currentMonth &&
        day < currentDay) ||
        (props.yearList[selectedYear] === currentYear &&
          selectedMonth < currentMonth) ||
        props.yearList[selectedYear] < currentYear,
      "ddd",
      props.yearList[selectedYear] === currentYear,
      selectedMonth === currentMonth,
      day < currentDay,
      props.yearList[selectedYear] === currentYear,
      selectedMonth < currentMonth,
      props.yearList[selectedYear] < currentYear
    );
    return (
      (props.yearList[selectedYear] === currentYear &&
        selectedMonth === currentMonth &&
        day < currentDay) ||
      (props.yearList[selectedYear] === currentYear &&
        selectedMonth < currentMonth) ||
      props.yearList[selectedYear] < currentYear
    );
  };

  return (
    <div
      className={classes.DatePickerWrapper}
      ref={datePickerSection}
      tabIndex="0"
      onBlur={hideDatePicker}
    >
      <input
        ref={inputRef}
        defaultValue={props.defaultValue}
        type="text"
        placeholder={props.placeholder}
        onClick={toggleShowingDatePicker}

        // onBlur={hideDatePicker}
      />
      {showDatePicker && (
        <div>
          <DatePickerMain
            yearList={props.yearList}
            weekDays={props.weekDays}
            canSelectPrevDate={props.canSelectPrevDate}
            currentMonth={currentMonth}
            currentYear={currentYear}
            currentDay={currentDay}
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            selectedDay={selectedDay}
            setselectedYear={onSelectYear}
            setselectedMonth={onSelectMonth}
            setselectedDay={onSelectDay}
            isPrevDay={isPrevDay}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
