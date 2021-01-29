import React from 'react';
import ReactDOM from "react-dom";

import Filter from "./Filter";
import Column from "./Column";
import AddColumn from "./AddColumn";
import ListColumns from "./ListColumns";
import Board from "./Board";
import ConfettiGenerator from "confetti-js";

class EditBoard extends React.Component {
    constructor(props) {
        super(props);
        this.editBoard = this.editBoard.bind(this);

    }

    editBoard(event) {
        event.preventDefault();
        this.props.addBoard({
            name: this.refs.name.value,
            description: this.refs.description.value
        });

        let res = document.getElementById("res_popup_add_board");
        res.classList.add("res_popup__active");
        var confettiSettings = { target: 'canvas_confetti' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        setTimeout(() => {
            confetti.clear();
            res.classList.remove("res_popup__active");
            document.querySelector("body").classList.remove("locked");
            document.getElementById("block_popup").classList.remove("open_block_popup");
        }, 2000)
    }

    render() {
        return(
            <form ref={"form"} className={"popup_content"} onSubmit={this.editBoard}>
                <input placeholder={"name"} ref={"name"}/>
                <input placeholder={"description"} ref={"description"}/>
                <button type={"submit"}>Сохранить</button>
            </form>
        );
    }
}

export default EditBoard;

// open_block_popup