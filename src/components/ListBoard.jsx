import React from 'react';
import Board from "./Board";
import AddBoard from "./AddBoard";
import AddColumn from "./AddColumn";

class ListBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var items = this.props.items.map((item) => {
            return (
                <Board name={item.name} description={item.description} index={item.index} editBoard={this.props.editBoard}/>
            );
        });
        return (
            <div className={"block_list_boards"} id={"block_list_boards"}>
                {items}
                <AddBoard addBoard={this.props.addBoard}/>
            </div>
        );
    }
}

export default ListBoard;
