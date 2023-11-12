import React from 'react'
import Spreadsheet from "react-spreadsheet";

const FAS = () => {
    const data = [
        [{ value: "Chocolate", readOnly: true }, { value: "Vanilla" }, {value: ""} ],
        [{value: "Cookies", readOnly: true }, { value: "Strawberry" }, {value: ""} ],
      ];
      return (
        <div>
            <h1 className='mb-5 text-center'>FAS</h1>
            <Spreadsheet data={data} />
        </div>
        
      ) 
}

export default FAS
