import { useState } from "react";
import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function DropMenu() {

    const options = [ 
        'Standard',   
        'Show all Pending', 
        'Show all Completed'                      
        ];

    const defaultOption = options[0];

    return (
        <div>
            <Dropdown options={options} placeholder="Options" />
        </div>
    )
  }


export default DropMenu;




