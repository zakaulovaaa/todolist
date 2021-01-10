import React from 'react';

import Filter from "./Filter";
import Column from "./Column";
import AddColumn from "./AddColumn";

class ListColumns extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <h2 className={'h2-board_name'}>{this.props.name_board}</h2>
                <Filter/>

                <div class={"block_column"}>
                    <Column column_name={"col 1"}/>
                    <Column column_name={"col 2"}/>
                    <Column column_name={"col 3"}/>
                    <Column column_name={"col 4"}/>
                    <Column column_name={"col 5"}/>
                    <Column column_name={"col 6"}/>
                    <Column column_name={"col 7"}/>
                    <AddColumn/>
                </div>
            </div>

        );
    }
}

export default ListColumns;