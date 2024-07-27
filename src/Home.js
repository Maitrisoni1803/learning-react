import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
     const[blogs,SetBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

  // let name = 'maitri';
//   const [name, setName] = useState('maitri');
//   const [age, setAge] = useState(21);

//   const handleClick = () => {
//     // name = 'jensi';
//     setName('jensi');
//     setAge(17);
//   }

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!!!" />
      <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's blog!!!" />  
        {/* {blogs.map((blog) => (
           <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>written byt{blog.author}</p>
           </div>
         ))} */}
      {/* <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button> */}
    </div>
  );
}
 
export default Home;