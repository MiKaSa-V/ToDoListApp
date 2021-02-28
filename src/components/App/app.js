import React from 'react';
import AppHeader from '../AppHeader/appHeader';
import PostAddForm from '../PostAddForm/postAddForm';
import PostList from '../PostList/postList';
import PostStatusFilter from '../PostStatusFilter/postStatusFilter';
import SearchPanel from '../SearchPanel/searchPanel';
import './app.css';
const App = () => {

    const data = [
        { label: 'Go to learn React', important: false, id: 'qwwd'},
        { label: 'Next find the job', important: true, id: 'dqwdq' },
        { label: 'And all be ok!', important: false, id: 'qhrthrwwd' }
    ];
    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    )
}
export default App;