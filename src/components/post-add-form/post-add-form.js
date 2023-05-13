import React from "react";
import "./post-add-form.css";

class PostAddForm extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            text : ''
        }
    }
    // const {onAdd} = this.props;
    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    // onClick={() => onAdd('Hello')} - заменили на событие формы submit
                >
                    Добавить
                </button>
            </form>
        );
    }
}

export default PostAddForm;
