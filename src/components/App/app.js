import React from 'react';
import AppHeader from '../AppHeader/appHeader';
import PostAddForm from '../PostAddForm/postAddForm';
import PostList from '../PostList/postList';
import PostStatusFilter from '../PostStatusFilter/postStatusFilter';
import SearchPanel from '../SearchPanel/searchPanel';
import './app.css';
const App = () =>{
    return(
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList/>
            <PostAddForm/>
        </div>
    )
}
export default App;