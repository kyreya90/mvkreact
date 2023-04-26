import {useEffect, useState} from "react";
import axios from "axios";
import {UserPosr, UserPost} from "./UserPosr";

const UserPosts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(value => value.data).then(value => setPosts(value))
    }, [userId])

    return (
        <div>
            {posts.map(post=><UserPosr key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPosts};