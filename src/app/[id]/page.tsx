 const DynamicBook = async (props:any) => {
     const url = await fetch (
         `https://jsonplaceholder.typicode.com/posts/${props.params.id}`
     )
     const res = await url.json();
 console.log("singleBooksResponse" , res)
    return (
    <h1 className=" pl-5 text-7xl ">
        {res.userId} <br />
         {props.params.id} <br />
         {res.title} <br />
         {res.body} <br />
        
         </h1>
    )
 }

export default DynamicBook



