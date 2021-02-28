import React from 'react';
import PostListItem from '../PostListItem/postListItem';
import './postList.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                {/* <PostListItem
                    label={item.label}
                    important={item.important}
                /> */}
                <PostListItem {...itemProps}/> {/*тоже что и часть выше */}
            </li>
        )
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default PostList;