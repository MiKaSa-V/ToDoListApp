import React, { Component } from 'react';
import AppHeader from '../AppHeader/appHeader';
import PostAddForm from '../PostAddForm/postAddForm';
import PostList from '../PostList/postList';
import PostStatusFilter from '../PostStatusFilter/postStatusFilter';
import SearchPanel from '../SearchPanel/searchPanel';
import './app.css';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: 'Go to learn React', important: false, done: false, id: 1 },
                { label: 'Next find the job', important: false, done: false, id: 2 },
                { label: 'And all be ok!', important: false, done: false, id: 3 }
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 4;
    }

    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index +1)];
            return{
                data: newArr
            }
            
        });
    }

    addItem(body){
        const newItem = {
            label: body,
            important: true,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    onToggleImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)];

            return {
                data: newArr
            }
        })
    }
    onToggleDone(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, done: !old.done};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)];

            return {
                data: newArr
            }
        })
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) =>{
            return item.label.indexOf(term) > -1
        });
    }

    filterPosts(items, filter){
        if(filter === 'done') {
            return items.filter(item => item.done)
        } else {
            return items
        }
    }


    onUpdateSearch(term){
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const done = data.filter(item => item.done).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader 
                done={done}
                allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel 
                    onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem} 
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <PostAddForm 
                onAdd={this.addItem}/>
            </div>
        )
    }
}