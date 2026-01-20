import { useState } from "react";
export default function Head(props){
    const [searchTerm, setSearchTerm]=useState("")
    return(
        <header>
            <h1>Book App</h1>
            <form onSubmit={(e)=>
               {
                 e.preventDefault();
                props.onSearch(searchTerm)
               }
            }>
                <input type="text" placeholder="search for the book" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                <button>Search</button>
            </form>
           
        </header>
    )
}