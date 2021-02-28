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
                { label: 'Next find the job', important: true, done: false, id: 2 },
                { label: 'And all be ok!', important: false, done: false, id: 3 }
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);
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
            important: false,
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

    render() {
        const {data} = this.state;
        const done = data.filter(item => item.done).length;
        const allPosts = data.length;

        return (
            <div className="app">
                <AppHeader 
                done={done}
                allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem} 
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <PostAddForm 
                onAdd={this.addItem}/>
            </div>
        )
    }
}