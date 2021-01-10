import React from 'react';

import Filter from "./Filter";

class Column extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div class={"column"}>
                <h3 class={'column_name'}>{this.props.column_name}</h3>
            </div>

        );
    }
}

export default Column;