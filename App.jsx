import Head from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import data from "./Components/Data/Data.js";
import { useState } from "react";
function App(){
   const [book,setBook]=useState([]);
   function handleSearch(searchTerm){
      fetch(`https://openlibrary.org/search.json?q=${searchTerm}`)
      .then(response=>response.json())
      .then(data=>setBook(data.docs))
   }
    return(
        <main>
            <Head  onSearch={handleSearch}/>
            <Body book={book}/>
            <Footer/>
        </main>
    )
}

export default App



 // const [books,setBooks]=useState([]);
    // const searchBook=async()=>{
    //     if(!query)return;
    //     const response=await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
    //     const data=await response.json();
    //     const results=data.docs.map((books)=>({
    //         Title:books.title,
    //         Url: books.cover_i ? `https://covers.openlibrary.org/b/id/${books.cover_i}-M.jpg`:null
    //     }));
    //     setBooks(results)
    // }