import React from 'react'

function MonthBox ({NewDate, month, optionsMonth}) {


return (
    <div >
        {new Intl.DateTimeFormat("en-US", optionsMonth).format(NewDate)}
    </div>
  );
}


export default MonthBox;