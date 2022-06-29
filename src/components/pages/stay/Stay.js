
import React from "react";
import { useState } from "react"
import axios from 'axios';
import './Stay.css';
import { Calendar } from "react-multi-date-picker";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";
import { Button } from "@mui/material";
import Notiflix from 'notiflix';

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

// Effects On calendar load
const MyPlugin = (Calendar) => {

  
  // eslint-disable-next-line no-extend-native
  String.prototype.toEnglishDigit = function() { var find = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']; var replace = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; var replaceString = this; var regex; for (var i = 0; i < find.length; i++) { regex = new RegExp(find[i], "g"); replaceString = replaceString.replace(regex, replace[i]); } return replaceString; };

  // Get current calendar's frist date
  let date_from = Calendar.state.date.format("YYYY/M") + '/۱';

  // Get current calendar's last date
  let date_to = Calendar.state.date.format("YYYY/M") + '/۳۱';

  let config = {
    headers: {
      authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBwLnN0YXlhcm9vbS5pclwvc2VydmVyIiwiaWF0IjoxNjU1NTQ4ODI0LCJuYmYiOjE2NTU1NDg4MjQsImV4cCI6MTY1NjE1MzYyNCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoxLCJkZXZpY2UiOiIiLCJwYXNzIjoiNjk0ZWY4OTFmN2Y1NTgzMmIwNmY0NzIwM2U4ODlkNDgifX19.ByHJJFXwsJDil0Rn1xewbO_5BUsI0li5wuiblPCR-as',
    }
  }

  let data = {
    'segment_id': '55',
    'date_from': date_from.toEnglishDigit(),
    'date_to': date_to.toEnglishDigit()
    // 'date_from': '1401-3-1',
    // 'date_to': '1401-3-31'
  }

  axios.post(`https://app.stayaroom.ir/server/wp-json/api/v2/booked-dates`, data, config)
    .then(res => {
      const bookedDays = res.data;
      this.setState({ bookedDays });
      console.info(res.data)
    })

}

class Stay extends React.Component {

  state = {
    bookedDays: []
  }

  render() {
    return (
      <div>
        <Calendar
          range
          onChange={array => {
            console.info(array[0].format("YYYY/M/D"))
            if (array[1] !== undefined)
            Notiflix.Notify.success(array[1].format("YYYY/M/D"));
            //   console.info(array[1].format("YYYY/M/D"))
          }}
          calendar={persian}
          locale={persian_fa}
          weekDays={weekDays}
          className="custom-calendar"
          plugins={
            [weekends([6]),
              <Footer
                position="bottom"
                format="dddd DD MMMM"
                names={{
                  selectedDates: "تاریخ اقامت",
                  from: "ورود: ساعت 18 روز",
                  to: "خروج: ساعت 16 روز",
                  selectDate: "................",
                  close: "بستن",
                  separator: "",
                }}
              />,
              <MyPlugin />
          ]} 
        />
        <Button variant="outlined" position="center">ثبت رزرو</Button>
      </div>
    );
  }
}

export default Stay