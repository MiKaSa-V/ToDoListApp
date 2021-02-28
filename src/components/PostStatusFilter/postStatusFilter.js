import React from 'react';
import './postStatusFilter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button 
                type="submit"
                className="btn btn-outline-secondary btn-post-filter">
                Все</button>
                <button 
                type="submit"
                className="btn btn-outline-secondary btn-post-filter">
                Выполненные</button>
        </div>
    )
}
export default PostStatusFilter;