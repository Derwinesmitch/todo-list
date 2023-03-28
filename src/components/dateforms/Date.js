import React from 'react'
import MonthBox from './DateMonth';
import DayBox from './DateDay';
import DayNumber from './DateNumber';
import Calendar from './DatePicker';
function DateBox () {

    const NewDate = new Date();
    const day = NewDate.getDay();   
    const optionsDay = { weekday: "long" };
    const month = NewDate.getMonth();   
    const optionsMonth = { month: "long" };
    // const dayDate = NewDate.getDate();   

return (
    <div>
        <div class="flex">
            <DayBox NewDate={NewDate} day={day} optionsDay={optionsDay} />
            <DayNumber NewDate={NewDate} day={day}/>
        </div>
        <div>
            <MonthBox NewDate={NewDate} month={month} optionsMonth={optionsMonth}/>
        </div>
            <Calendar />
    </div>

  );
}


export default DateBox;