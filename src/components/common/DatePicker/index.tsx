import React, { useRef } from "react";
import { useState } from "react";
import moment from "jalali-moment";

import classes from "./DatePicker.module.scss";
import DatePickerMain from "./DatePickerMain";

// yearList={yearList}
// weekDays={weekDays}
// placeholder="label"
// defaultValue={null}
// onChange={changeDate}
// canSelectPrevDate={false}

interface Iprops {
  yearList: number[];
  weekDays: string[];
  placeholder: string;
  defaultValue: string | number | readonly string[] | undefined;
  onChange: (value: string) => void;
  canSelectPrevDate: boolean;
}
const DatePicker = (props: Iprops) => {
  moment.locale("fa");

  const inputRef = useRef<HTMLInputElement>(null);
  const datePickerSection = useRef<HTMLDivElement>(null);

  const currentYear = parseInt(moment().format("YYYY"));
  const currentMonth = parseInt(moment().format("M"));
  const currentDay = parseInt(moment().format("D"));

  const [selectedDay, setselectedDay] = useState<number | null>(null);
  const [selectedMonth, setselectedMonth] = useState(currentMonth);
  const [selectedYear, setselectedYear] = useState(
    props.yearList.indexOf(currentYear)
  );
  const [showMessage, setshowMessage] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleShowingDatePicker = (
    event: React.MouseEvent<HTMLInputElement>
  ) => {
    setShowDatePicker(!showDatePicker);
  };

  const hideDatePicker = (event?: React.FocusEvent<HTMLDivElement>) => {
    if (!event) {
      setTimeout(() => {
        setShowDatePicker(false);
      }, 180);
    } else {
      if (
        !(
          event.relatedTarget === datePickerSection.current ||
          event.relatedTarget?.id === "changeDateBTN" ||
          event.relatedTarget?.id === "prevDay"
        )
      ) {
        setTimeout(() => {
          setShowDatePicker(false);
        }, 180);
      }
    }
  };
  const setInputDate = (year: number, month: number, day: number | null) => {
    if (!!inputRef.current) {
      if (!!day) {
        inputRef.current.value = props.yearList[year] + "/" + month + "/" + day;
        props.onChange(props.yearList[year] + "/" + month + "/" + day);
      } else {
        inputRef.current.value = "";
        props.onChange("");
      }
    }
  };
  const onSelectYear = (year = selectedYear) => {
    setselectedYear(year);
    if (!!selectedDay)
      if (
        isPrevDay(selectedDay, selectedMonth, year) &&
        !props.canSelectPrevDate
      ) {
        setselectedDay(null);
        setInputDate(0, 0, null);
      } else {
        setInputDate(selectedYear, selectedMonth, selectedDay);
      }
  };

  const onSelectMonth = (month = selectedMonth) => {
    setselectedMonth(month);
    if (!!selectedDay)
      if (isPrevDay(selectedDay, month) && !props.canSelectPrevDate) {
        setselectedDay(null);
        setInputDate(0, 0, null);
      } else {
        setInputDate(selectedYear, month, selectedDay);
      }
  };

  const onSelectDay = (day = selectedDay) => {
    if (!!day) {
      if (!props.canSelectPrevDate && isPrevDay(day)) {
        //if user can not select prev date BUT does=> clear input and show  a message

        setselectedDay(null);
        setInputDate(0, 0, 0);
        setshowMessage(true);
      } else {
        //if user select right date =>
        // set the day / show it in input / dont show message / close datePicker

        setselectedDay(day);
        setInputDate(selectedYear, selectedMonth, day);
        hideDatePicker();
        setshowMessage(false);
      }
    }
  };

  const isPrevDay = (
    day: number | null,
    month: number = selectedMonth,
    year: number = selectedYear
  ) => {
    if (!!day)
      return (
        (props.yearList[year] === currentYear &&
          month === currentMonth &&
          day < currentDay) ||
        (props.yearList[year] === currentYear && month < currentMonth) ||
        props.yearList[year] < currentYear
      );
    return undefined;
  };

  return (
    <div
      className={classes.DatePickerWrapper}
      ref={datePickerSection}
      tabIndex={0}
      onBlur={hideDatePicker}
    >
      {showMessage && showDatePicker && (
        <p className={classes.ErrTag}>این روز قابل رزرو نیست!</p>
      )}

      <input
        ref={inputRef}
        defaultValue={props.defaultValue}
        type="text"
        placeholder={props.placeholder}
        onClick={toggleShowingDatePicker}
      />
      {showDatePicker && (
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
          setshowMessage={setshowMessage}
        />
      )}
    </div>
  );
};

export default DatePicker;
