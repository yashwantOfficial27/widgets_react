// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [{
    label : 'Afrikaans',
    value : 'af'
},
{
    label : "Arabic",
    value : 'ar'
},
{
    label : "Hindi",
    value : 'hi'
}
];

export default function Translate() {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('');
  return (
      <div>
          <div className = 'ui form'>
            <div className = "field"> 
                <label>Enter a language</label>
                <input value = {text} onChange = {(e)=>setText(e.target.value)} />
           </div>
          </div>
          <Dropdown label = "Select a Language" options={options} selected={language} onSelectedChange={setLanguage} />
          <hr />
          <Convert text= {text} language = {language} />
      </div>
  )
}
