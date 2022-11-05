import React from 'react'
import "./PostComponent.css";

const PostComponent = ({ post }) => {
    return (
        <div className='postCard'>
            <p>Title : <span>{post.title}</span></p>
            <p>Body : <span>{post.body}</span></p>
        </div>
    )
}

export default PostComponent