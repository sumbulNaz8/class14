import Link from "next/link"

export default async function Home() {
  // const url = await fetch ('https://simple-books-api.glitch.me');
  const url = await fetch ('https://jsonplaceholder.typicode.com/posts')
  const response = await url.json ()
  console.log(response)
  return(
    
    <div>
      {response.map((book:any,index:number)=>(
        <div key={index} className="text-5xl">
          <Link href={`${book.id}`}>
         {book.id}
        
          </Link>
          </div>
      ))}   
      
    
     </div>
  
   )  

  }