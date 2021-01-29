import React from 'react';

import Filter from "./Filter";

class Column extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className={"column"}>
                <h3 className={'column_name'}>{this.props.column_name}</h3>
            </div>
        );
    }
}

export default Column;