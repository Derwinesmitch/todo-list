import React, { useState } from 'react'
import MonthBox from './DateMonth';
import DayBox from './DateDay';
import DayNumber from './DateNumber';
import Calendar from './DatePicker';

function DateBox () {
    const [showCalendar, setShowCalendar] = useState(false);
    const [NewDate, setNewDate] = useState(new Date());
    
    const day = NewDate.getDay();   
    const optionsDay = { weekday: "long" };
    const month = NewDate.getMonth();   
    const optionsMonth = { month: "long" };
    const dayNum = NewDate.getDate();

    const onChangeDate = (NewStartDate) => {
        console.log (NewStartDate)
        setNewDate(NewStartDate)

    }

    
return (
        <div class="font-mono bg-mediumgray">
            <div class="flex">
                <DayBox NewDate={NewDate} day={day} optionsDay={optionsDay} onClick={() => setShowCalendar(!showCalendar)}/>
                <DayNumber NewDate={NewDate} dayNum={dayNum}/>
            </div>
            <div>
                <MonthBox NewDate={NewDate} month={month} optionsMonth={optionsMonth}/>
            </div>
                {showCalendar && <Calendar changeDate={onChangeDate} onShowCalendar={showCalendar} NewDate={NewDate}/>}
        </div>

  );
}


export default DateBox;