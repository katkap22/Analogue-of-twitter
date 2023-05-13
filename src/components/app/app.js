import React from 'react';
import s from './app.module.css';
import AppHeader from "../app-header/app-header";
import PostAddForm from "../post-add-form/post-add-form";
import PostList from "../post-list/post-list";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import SearchHeader from '../search-panel/search-panel';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, like: false, id: 1},
                {label: 'That is so good', important: false, like: false, id: 2},
                {label: 'I need a break...', important: false, like: false, id: 3}
            ]
        }

        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            return {
                data: [...before, ...after]
            }
        });
    };

    addItem = (body) => {
        debugger
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            };
        })
    }

    // onToggleState = (id) => {
    //     const index = this.state.data.findIndex(elem => elem.id === id);
    //     const old = this.state.data[index];
    //     return {
    //         old
    //     }
    // }

    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            // const old = this.onToggleState(id);
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr

            }
        })
    }

    onToggleLiked = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    render() {
        const {data} = this.state;
        const liked = data.filter(post => post.like).length;
        const allPosts = data.length;


        return (
            <div className={s.app}>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchHeader/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }

}

export default App;