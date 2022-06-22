import React, { useEffect, useState } from 'react'
import Post from './Post';
import {db} from "../../firebase"
import { collection, orderBy, query ,onSnapshot} from '@firebase/firestore';


function Posts() {
  const[posts,setPosts] =useState([]);

  useEffect (() => {
    const unsubscribe =onSnapshot(query(collection(db,'posts'),orderBy('timestamp','desc')),snapshot =>{
      setPosts(snapshot.docs);

    })
    return unsubscribe();
  },[])

  
  // useEffect(
  //   () => 
  //   onSnapshot(
  //     query(collection(db, 'posts'), orderBy('timestamp','desc')),
  //     snapshot =>{
  //       setPosts(snapshot.docs);
  //     }
  //   ),
  //   [db]
  //   )

    console.log(posts)

  return (
    <div>
        {/* {posts.map((post)=>
        <Post 
        key={post.id} 
        id={post.id}
        username={post.data().username}
        userImg={post.data().profileImg}
        img={post.data().image}
        caption = {post.data().caption}    
        />
        )} */}
  
    </div>
  )
}

export default Posts