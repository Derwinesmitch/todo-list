import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import '../../datepickerstyle.css';

function Calendar ({changeDate, onShowCalendar, NewDate}) {
    const [startDate, setStartDate] = useState(NewDate);
    
    useEffect (()=> { 
      setStartDate(NewDate)
    },[NewDate])

    useEffect(()=>{
      changeDate(startDate)
    },[startDate])

    useEffect(()=> {
      console.log("this is show calendar ",onShowCalendar)
    },[onShowCalendar])

    return (
      <div className="hideInput"> 
        <DatePicker selected={startDate} onChange={(date) => {
          setStartDate(date)
          console.log(date)
          }}
          open={onShowCalendar}
          className="hideDatepicker"
          />
      </div>
      
    );
  };

export default Calendar;