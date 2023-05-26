'use client'
import { instance } from "../api/api";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import WritePost from "../../components/WritePost";
import Post from "../../components/Post";
import Image from "next/image";

interface User {
  id: number;
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  }
}

const Feed = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    instance.get('?results=1&nat=br')
      .then((response:any) => {
        setUsers(response.data.results);
      })
      .catch((error:Error) => {
        console.log(error);
      });
  }, []);

  const posts = [
    { id: 1, content: "Este é o primeiro post"},
    { id: 2, content: "Este é o segundo post" },
    { id: 3, content: "Este é o terceiro post" },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-[#F0F2F5] dark:bg-[#18191A]">
      <Header></Header>
      <WritePost></WritePost>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    
    <div className="flex">
      {users.map((user, index) => (
        <div key={`${user.id}-${index}`}>
          <Image src={user.picture.large} alt="foto" width={100} height={100}></Image>
          <p>{user.name.first} {user.name.last}</p>
        </div>
      ))}
    </div>

    </div>
  );
}

export default Feed;