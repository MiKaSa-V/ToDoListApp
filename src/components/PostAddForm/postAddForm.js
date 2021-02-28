import React from 'react';
import './postAddForm.css';

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="Название задания"
                className="form-control new-post-label"
            />
            <button 
                type="submit"
                className="btn btn-outline-secondary"
                    onClick={() => onAdd()}>
                Добавить</button>
        </div>
    )
}
export default PostAddForm;