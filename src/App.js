import React from 'react';
import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import Pokemons from "./pokemons";

function App() {
    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState('');


console.log(page);


    useEffect(() => {
            async function fetchData() {
                try {
                    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageNumber * 20}`)
                        setPage(result.data.results);
                }
                catch (e) {
                    console.error(e);
                }
            }
                fetchData()

        }, [pageNumber]
    )


  return (
<main>
    <img src="https://th.bing.com/th/id/OIP.ZkK18aWpurRc6JOttxFCWgHaC9?pid=ImgDet&rs=1" width={900} height={300}/>
    <p><strong>You are at page: {pageNumber}</strong></p>
        <p>
        <button disabled={pageNumber === 0} onClick={() => {setPageNumber(0)}}>start</button>
            <button disabled={pageNumber === 10} onClick={() => {setPageNumber(10)}}>10</button>
            <button disabled={pageNumber === 20} onClick={() => {setPageNumber(20)}}>20</button>
            <button disabled={pageNumber === 30} onClick={() => {setPageNumber(30)}}>30</button>
            <button disabled={pageNumber === 40} onClick={() => {setPageNumber(40)}}>40</button>
            <button disabled={pageNumber === 50} onClick={() => {setPageNumber(50)}}>50</button>
        <button disabled={pageNumber === 55} onClick={() => {setPageNumber(55)}}>end</button>

    </p>
      <button className="next" disabled={pageNumber === 0} onClick={() => {setPageNumber(pageNumber - 1)}}>previous Page</button>
    <button className="next" disabled={pageNumber === 55} onClick={() => {setPageNumber(pageNumber + 1)}}>Next Page</button>
          <div className="all">

              {page && page.map((item, index) => {
            return (index < 5 ? <div className="class1" key={index}><Pokemons pokemons={item.url} key={item.name}/></div> : index < 10 ?
                <div className="class2" key={index}><Pokemons pokemons={item.url} key={item.name}/></div> : index < 15 ? <div className="class3" key={index}><Pokemons pokemons={item.url} key={item.name}/></div> :
            index < 20 ? <div className="class4" key={index}><Pokemons pokemons={item.url} key={item.name}/></div> : false)
        })}


    </div>
</main>
  );
}

export default App;
