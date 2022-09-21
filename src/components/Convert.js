import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Convert({text, language}){
    const [translated, setTranslated] = useState();  
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 5000)

        return() =>{
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(() => {
        const doTranslation = async () =>{
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params : {
                q : debouncedText,
                target : language.value,
                key : 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        }
    doTranslation();
    }, [debouncedText, language])
    
    return(
        <div className = "ui header">{translated}</div>
    );
}