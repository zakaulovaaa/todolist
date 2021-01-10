import React from 'react';
import Board from "./Board";
import AddBoard from "./AddBoard";

class ListBoard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div class={"block_list_boards"}>
                <Board/>
                <Board/>
                <Board/>
                <Board/>
                <Board/>
                <Board/>
                <Board/>
                <Board/>
                <Board/>
                <Board/>
                <Board/>
                <Board/>
                <AddBoard/>
            </div>
        );
    }
}

export default ListBoard;