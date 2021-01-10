import React from 'react';

import Filter from "./Filter";

class ListColumns extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <h2 className={'h2-board_name'}>{this.props.name_board}</h2>
                <Filter/>
            </div>

        );
    }
}

export default ListColumns;