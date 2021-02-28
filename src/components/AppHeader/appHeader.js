import React from 'react';
import './appHeader.css';
const AppHeader = ({done, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>To Do List</h1>
            <h2>{allPosts} заданий, из них выполнено {done}</h2>
        </div>
    )
}
export default AppHeader;
