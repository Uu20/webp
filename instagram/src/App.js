import HeaderPhoto from './header.png';
import './App.css';
import Post from './Post';
import {db} from './firebase';
import {collection, getDocs} from 'firebase/firestore';
import React,{useEffect, useState} from 'react';
import tmpPicture from './20220225004.jpg';


function App() {
  const [posts, setPosts] = useState([]);

  //try run when post change
  useEffect( ()=>{
    const querySnapshot = getDocs(collection(db, "post"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.username} => ${doc.data()}`);
    });
    // setPosts(querySnapshot.(doc => {
    //   (doc => doc.data())
    // }));
  // collection('post').onSnapshot(snapshot =>{
  //     //every time new post add 
  //     setPost(snapshot.docs.map(doc => doc.data()));
  //   })
  } ,[])


  return (
    <div className="app">
      {/* Header */}
      <div className="app_header">
        <img className="app_headerImage" src={HeaderPhoto} alt="">
        </img>
      </div>

      <h1>Hello</h1>
      {
        posts.map(post =>(
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      {/* Posts */}

      {/* Posts */}
    </div>
  );
}

 export default App;
