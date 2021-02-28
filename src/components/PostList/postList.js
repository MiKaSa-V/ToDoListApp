import React from 'react';
import PostListItem from '../PostListItem/postListItem';
import './postList.css';

const PostList = () => {
    return (
        <div>
            <ul className="app-list list-group">
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            </ul>
        </div>
    )
}
export default PostList;