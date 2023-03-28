import React, { useState, useEffect } from 'react'

function MonthBox ({NewDate, month, optionsMonth}) {
const [dateState, setDateState] = useState ()


return (
    <div >
        {new Intl.DateTimeFormat("en-US", optionsMonth).format(NewDate)}
    </div>
  );
}


export default MonthBox;