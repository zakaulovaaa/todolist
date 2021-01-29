import React from 'react';

import Filter from "./Filter";
import Column from "./Column";
import AddColumn from "./AddColumn";
import EditBoard from "./EditBoard";

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.closePopup = this.closePopup.bind(this);
    }

    closePopup() {
        document.querySelector("body").classList.remove("locked");
        document.getElementById("block_popup").classList.remove("open_block_popup");
    }

    render() {
        return(
            <div className="block_popup" id={"block_popup"}>
                <div className="popup">
                    <div className={"res_popup"} id={"res_popup_add_board"}>
                        <div>Добавила!</div>
                        <img src={"/img/unicorn.svg"}/>
                    </div>
                    <div className={"popup_main_content"}>
                        <div className={"popup__header"}>
                            <h2 className={"name_popup"}>{this.props.nameAction}</h2>
                            <button className={"close_popup"} type="button" onClick={this.closePopup}>
                                <img src="img/cancel_black.svg" width="20" height="20"/>
                            </button>
                        </div>
                        <EditBoard addBoard={this.props.addBoard}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;