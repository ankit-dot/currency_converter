import {useState,useEffect} from 'react';

const useCurrencyHook = (currency) => {
    const [data,setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => {
            return response.json();
        }).then((res) => {
            setData(res[currency]);
        })
        .catch((error) => {
            console.log(error);
        })
        
        

    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyHook;