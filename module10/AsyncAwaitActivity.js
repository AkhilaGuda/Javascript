async function fetchData(){//declaring asynchronous function using async
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/posts");//await pauses execution until data is received
        const data= await response.json();//converting response to json data
        console.log("Titles of first 5 posts: ");
        data.slice(0, 5).forEach((post,index)=>{
            console.log(`${index+1}. ${post.title}`);
        });
    }
    catch(error){
        console.error("Error fetching data: ",error);
    }
}
fetchData();