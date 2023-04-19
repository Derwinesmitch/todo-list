import React from 'react'

function DayBox ({NewDate, optionsDay, onClick}) {


return (
    <div class="mr-1" onClick={onClick}>
        {new Intl.DateTimeFormat("en-US", optionsDay).format(NewDate)}
    </div>
  );
}


export default DayBox;