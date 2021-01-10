import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="board">
                <p class="name_board">Название</p>
                <p class="description_board">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
            </div>
        );
    }
}

export default Board;