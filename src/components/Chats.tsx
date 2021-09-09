import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import "../styles/chats.css";
import { db } from "../firebase";
import { Chat } from "./Chat";

const Chats = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("images")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot: any) =>
        setPosts(
          snapshot.docs.map((doc: any) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  console.log(posts);

  return (
    <div className="chats">
      <div className="chat__header">
        <Avatar className="chat__avatar" />
        <div className="chat__search">
          <SearchIcon />
          <input type="text" placeholder="Friends" />
        </div>
        <ChatBubbleIcon className="chat__message" />
      </div>
      <div className="chat__posts">
        {posts.map(
          ({
            id,
            data: { profilePic, username, timestamp, imageUrl, read },
          }) => (
            <Chat
              key={id}
              id={id}
              username={username}
              timestamp={timestamp ? timestamp : 1}
              imageUrl={imageUrl}
              read={read}
              profilePic={profilePic}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Chats;
