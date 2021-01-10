import React from 'react';

import Filter from "./Filter";

class AddColumn extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div class={"add_column"}>
                <img src="/img/add-board.svg"/>
                {/*<h3 class={'column_name'}>{this.props.column_name}</h3>*/}
            </div>

        );
    }
}

export default AddColumn;