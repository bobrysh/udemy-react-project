import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('Programming')
    const [results, setResults] = useState([])

    useEffect(()=>{
        // #1 Способ запустить асинк в useEffect
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch: term,
                },
            });

            setResults(data.query.search);
        }

        if(term && !results.length){
            search();
        } else{

            const timeoutId = setTimeout(()=>{
                if(term){
                    search();
                }
            },800)

            return () => {
                clearTimeout(timeoutId)
            }
        }






        // #2 Способ запустить асинк в useEffect
        // (async () => {
        //     await axios.get()
        // })();

        // #3 Способ запустить асинк в useEffect
        // axios.get('asdasd')
        // .then((respone) => {
        //     console.log(respone.data);
        // });
    },[term])

    const renderedResults = results.map((result)=>{
        return (
            <div className='item' key={result.pageid}>
                <div className="right floated content">
                </div>
                <div className='content'>
                    <div className='header'>
                        <h4>{result.title}</h4>
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        className="input"
                        value={term}
                        onChange={e=>setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className='ui celled list'>
                <div>
                    {renderedResults}
                </div>
            </div>
        </div>
    )
}

export default Search;