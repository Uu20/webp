import React, { useEffect, useState } from 'react'
import Post from './Post';
import {db} from "../../firebase"
import { collection, orderBy, query ,onSnapshot} from 'firebase/firestore';

const posts =[
    {
        id:'123',
        username: 'David',
        userImg:'https://thumbor.4gamers.com.tw/7mKUQMwhBM7MKadnicztyEWT1JI=/adaptive-fit-in/1200x1200/filters:no_upscale():extract_cover():format(jpeg):quality(85)/https%3A%2F%2Fugc-media.4gamers.com.tw%2Fpuku-prod-zh%2Fanonymous-story%2F3e29bb69-e91d-4d50-8faf-c5b9393f91e0.jpg',
        img:"https://thumbor.4gamers.com.tw/7mKUQMwhBM7MKadnicztyEWT1JI=/adaptive-fit-in/1200x1200/filters:no_upscale():extract_cover():format(jpeg):quality(85)/https%3A%2F%2Fugc-media.4gamers.com.tw%2Fpuku-prod-zh%2Fanonymous-story%2F3e29bb69-e91d-4d50-8faf-c5b9393f91e0.jpg",
        caption:"233333333333333"
    }
]

function Posts() {
  const[posts,setPosts] =useState([]);

  useEffect(
    () => onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp','desc')),
      snapshot =>{
        setPosts(snapshot.docs);
      }
    ),
    [db])

     console.log(posts)

  return (
    <div>
        {posts.map((post)=>
        <Post key={post.id} 
        id={post.id}
        username={post.username}
        userImg={post.userImg}
        img={post.img}
        caption = {post.caption}    
        />
        )}
        <Post/>
        
    </div>
  )
}

export default Posts