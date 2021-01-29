import React from 'react';


import Search from "./Search";
import ListBoard from "./ListBoard";

class MainApp extends React.Component {
    constructor (props) {
        super(props);
        this.addBoard = this.addBoard.bind(this);
        this.editBoard = this.editBoard.bind(this);
        this.deleteBoard = this.deleteBoard.bind(this);
        this.state = {todoItems: props.initItems};
    }

    addBoard(todoItem) {
        this.state.todoItems.unshift({
            index: this.state.todoItems.length+1,
            name: todoItem.name,
            description: todoItem.description
        });
        this.setState({todoItems: this.state.todoItems});
    }
    editBoard(todoItem) {
        for (let i = 0; i < this.state.todoItems.length; i++) {
            if (this.state.todoItems[i].index === todoItem.index) {
                this.state.todoItems[i].name = todoItem.name;
                this.state.todoItems[i].description = todoItem.description;
                break;
            }
        }
        this.setState({todoItems: this.state.todoItems});
    }

    deleteBoard(todoItem) {
        let num = -1;
        for (let i = 0; i < this.state.todoItems.length; i++) {
            if (this.state.todoItems[i].index === todoItem.index) {
                num = i;
                break;
            }
        }
        if (num >= 0) {
            this.state.todoItems.splice(num, 1);
        }
        this.setState({todoItems: this.state.todoItems});
    }

    render() {
        return (
            <div className="block_boards">
                <Search/>
                <div id="block_list_boards">
                    <ListBoard items={this.state.todoItems}
                               addBoard={this.addBoard}
                               editBoard={this.editBoard}
                               deleteBoard={this.deleteBoard}
                    />
                </div>
            </div>
        );
    }
}
export default MainApp;
