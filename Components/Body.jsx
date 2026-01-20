export default function Body({book}){
   if(!book || book.length===0){
    return <p> No results Yet. Try searching!</p>;
   }
    return(
      book.slice(0,5).map(item=>(
        <section className="Book-Section">
            <div className="Main-img">
                <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}alt={item.title} />
            </div>
            <div className="Description">
                <h2>Title:<span>{item.title}</span></h2>
                <p>Author: <span>{item.author_name && item.author_name[0]}</span> </p>
                <a href="amazone.com">To purchase</a>
            </div>
        </section>
      ))
    )
}