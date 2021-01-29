import React from 'react';
import Popup from "./Popup";
import ReactDOM from 'react-dom';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.editElem = this.editElem.bind(this);
        this.saveBoard = this.saveBoard.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.state = {
            isEdit: false,
            boardName: props.name,
            boardDescription: props.description
        }
    }

    editElem() {
        this.setState({isEdit: true});
    }

    saveBoard(event) {
        event.preventDefault();
        this.props.editBoard({
            index:this.props.index,
            name: this.refs.name.value,
            description: this.refs.description.value
        });
        this.setState({isEdit: false});
    }

    nameChange(event) {
        this.setState({
            boardName: event.target.value
        });
    }

    descriptionChange(event) {
        this.setState({
            boardDescription: event.target.value
        });
    }

    render() {
        if (this.state.isEdit) {
            return(
                <form className={"board"} onSubmit={this.saveBoard}>
                    <div className={"board_content"}>
                        <input value={this.state.boardName} onChange={this.nameChange} ref={"name"}/>
                        <textarea value={this.state.boardDescription} onChange={this.descriptionChange} ref={"description"}/>
                    </div>
                    <div className={"block_button"}>
                        <button className={"to_edit"} type={"submit"}>Сохранить</button>
                        <button className={"to_edit"}>Удалить</button>
                    </div>

                </form>
            );
        } else {
            return(
                <div className={"board"}>
                    <div className={"board_content"}>
                        <p className={"name_board"}>{this.props.name}</p>
                        <p className={"description_board"}>{this.props.description}</p>
                    </div>
                    <div className={"to_edit"} onClick={this.editElem}>Редактировать</div>
                </div>
            );
        }

    }
}

export default Board;