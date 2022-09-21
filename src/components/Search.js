import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = ()=>{
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);


    useEffect(() => {
      const timerId = setTimeout(() =>{
          setDebouncedTerm(term);
      }, 1000);
    
      return () => {
        clearTimeout(timerId);
      }
    }, [term]);

    useEffect(() => {
        const search = async () =>{
            // await axios.get('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming');
            const { data } = 
                    await axios.get('https://en.wikipedia.org/w/api.php', {
                        params: {
                            action : 'query',
                            list : 'search',
                            format : 'json',
                            origin : '*',
                            srsearch : debouncedTerm,
                        },
                    });
            
            setResults(data.query.search);
        }
      search();
    }, [debouncedTerm]);

    const renderedResults = results.map((result) =>{
        return (
            <div key = {result.pageid} className = 'item'>
                <div className = 'right floated content'>
                    <a className='ui button' href = {`https://en.wikipedia.org?curid=${result.pageid}`} target = '_blank'>Go</a>
                </div>
                <div className = 'content'>
                    <div className = 'header'>{result.title}</div>
                    {/* {result.snippet} */}
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        );
    })
    return(
        <div>
            <div className='ui form container'>
                <div className='field'>
                    <input placeholder = 'Search Here' className='input' onChange={(e) => {setTerm(e.target.value)}} value = {term} />
                </div>
            </div>
            <div className = "ui celled list">{renderedResults}</div>
        </div>
    );
}

export default Search;
