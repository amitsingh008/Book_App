import { useState } from "react";
export default function Head(props){
    const [searchTerm, setSearchTerm]=useState("")
    return(
        <header>
            <h1 className="heading">Book App</h1>
            <div className="form">
                <form onSubmit={(e)=>
               {
                 e.preventDefault();
                props.onSearch(searchTerm)
               }
            }>
                <input className="search" type="text" placeholder="search for the book" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                <button className="btn">Search</button>
            </form>
            </div>
           
        </header>
    )
}