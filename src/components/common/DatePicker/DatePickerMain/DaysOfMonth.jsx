import { useState } from "react";
import moment from "jalali-moment";

import Header from "./Header";
import classes from "../DatePicker.module.scss";

const DaysOfMonth = (props) => {
  moment.locale("fa");

  let dayList = [];

  const renderWeekDays = props.weekDays.map((item) => (
    <li key={item}>{item}</li>
  ));

  const getLastDayOfMonthPersianDate = (firstDayOfNextMonthString) => {
    const firstDayOfNextMonth = moment.from(
      firstDayOfNextMonthString,
      "fa",
      "YYYY/MM/DD"
    );

    const lastDayOfMonth = firstDayOfNextMonth.add(-1, "d");
    const lastDayOfMonthPersianDate = lastDayOfMonth.format("D");

    return lastDayOfMonthPersianDate;
  };

  const getFirstDayOfNextMonthString = () => {
    if (props.selectedMonth === 12) {
      return `${props.yearList[props.selectedYear] + 1}/1/1`;
    } else {
      return `${props.yearList[props.selectedYear]}/${
        props.selectedMonth + 1
      }/1`;
    }
  };
  const getFirstDayOfCurrentMonthString = () => {
    return `${props.yearList[props.selectedYear]}/${props.selectedMonth}/1`;
  };

  (function getDayList() {
    let lastDayCurrentMonth = getLastDayOfMonthPersianDate(
      getFirstDayOfNextMonthString()
    );
    let lastDayLastMonth = getLastDayOfMonthPersianDate(
      getFirstDayOfNextMonthString()
    );
    let firstDayWeekName = moment(getFirstDayOfCurrentMonthString()).day() + 1;

    if (firstDayWeekName !== 7) {
      for (let i = 0; i < firstDayWeekName; i++) {
        dayList.push(lastDayLastMonth - firstDayWeekName + i + 1);
      }
    }
    for (let day = 1; day <= lastDayCurrentMonth; day++) {
      dayList.push(day);
    }
    return dayList;
  })();

  const isItFromLastDaysOfPrevMonth = (item, index) => {
    return item > 20 && index < 7;
  };

  const renderDayList = () => {
    let itemList = dayList.map((item, index) => {
      let classNames = [];
      console.log(item, props.selectedDay, "item === props.selectedDay");
      // console.log(props.isPrevDay(item), "isPrevDay");
      if (!props.canSelectPrevDate && props.isPrevDay(item)) {
        //if props.canSelectPrevDate is false and item is previous date => add prevDay class
        classNames.push(classes.prevDay);
      } else {
        if (isItFromLastDaysOfPrevMonth(item, index)) {
          //if it is from last days of prev month => add prevMonth class
          classNames.push(classes.prevMonth);
        } else {
          if (item === props.selectedDay) {
            classNames.push(classes.selectedDay);
          }
          if (
            item === props.currentDay &&
            props.yearList[props.selectedYear] === props.currentYear &&
            props.selectedMonth === props.currentMonth
          ) {
            // if item is today => add currentDay class
            classNames.push(classes.currentDay);
          }
        }
      }

      return (
        <li className={classNames.join(" ")} key={index}>
          <button onClick={() => onDaySelect(item, index)}>{item}</button>
        </li>
      );
    });
    return itemList;
  };

  const onDaySelect = (item, index) => {
    if (props.canSelectPrevDate) {
      //if props.canSelectPrevDate is true => select any date
      if (isItFromLastDaysOfPrevMonth(item, index)) {
        //if user selects a day from the prev month =>
        //  before selecting the day, subtract the month by one
        props.setselectedMonth(props.selectedMonth - 1);
      }
      props.setselectedDay(item);
    } else {
      //if props.canSelectPrevDate is false =>
      //and  if item is not previous date => select the item
      if (!(props.isPrevDay(item) || isItFromLastDaysOfPrevMonth(item, index)))
        props.setselectedDay(item);
    }
  };

  return (
    <main>
      <ul className={classes.weekDay}>{renderWeekDays}</ul>
      <ul className={classes.monthDays}>
        {!!dayList.length && renderDayList()}
      </ul>
    </main>
  );
};
export default DaysOfMonth;
