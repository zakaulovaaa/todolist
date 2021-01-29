import React from 'react';

import Popup from "./Popup";
import ReactDOM from "react-dom";

class AddBoard extends React.Component {
    constructor(props) {
        super(props);
        this.press = this.press.bind(this);

    }

    press() {
        ReactDOM.render(<Popup addBoard={this.props.addBoard}
                               nameAction={"Добавить борд"}
                               action={"editBoard"}
        />, document.getElementById('popup_container'));

        document.querySelector("body").classList.add("locked");
        document.getElementById("block_popup").classList.add("open_block_popup");
    }

    render() {
        return(
            <div className={"board add_board"} onClick={this.press}>
                <img src="/img/add-board.svg"/>
            </div>
        );
    }
}

export default AddBoard;