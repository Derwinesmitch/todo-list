import React, { useState, useEffect } from 'react'

function DayBox ({NewDate, optionsDay}) {


return (
    <div class="mr-1">
        {new Intl.DateTimeFormat("en-US", optionsDay).format(NewDate)}
    </div>
  );
}


export default DayBox;