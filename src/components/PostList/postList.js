import React from 'react';
import PostListItem from '../PostListItem/postListItem';
import './postList.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleDone}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                {/* <PostListItem
                    label={item.label}
                    important={item.important}
                /> */}
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}/> 
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