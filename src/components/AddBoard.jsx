import React from 'react';

class AddBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="board add_board">
                <img src="/img/add-board.svg"/>
            </div>
        );
    }
}

export default AddBoard;