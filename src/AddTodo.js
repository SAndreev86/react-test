import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './AddTodo.css';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.setList = this.setList.bind(this);
        this.unItemList = this.unItemList.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);

        this.state = {
            Input: '',
            listState: this.props.todo,
        };
    }



    onChangeHandler(e) {
        this.setState({ Input: e.target.value });
    }

    setList() {
        this.props.setList(this.state.Input);
    }

    unItemList(e) {
        this.props.unsetList(e);
    }

    render() {
        //console.log("dsfdf");
        return (
            <div>
                <div className="row">
                    <div className="col-xs-10">
                        <input className="input_todo" onChange={this.onChangeHandler} type = "text"/>
                    </div>
                    <div className="col-xs-2 pad_btn">
                        <button className="button_add" onClick={this.setList}>
                            <span className="glyphicon glyphicon-plus"></span>
                        </button><br/>
                    </div>
                </div>

                <ReactCSSTransitionGroup transitionName="example"
                                         transitionEnterTimeout={300}
                                         transitionLeaveTimeout={300}>
                {this.state.listState.map((item, index) => {
                    return (

                        <div key={index}>
                            <div>
                                <div className="item inl">{item}</div>
                                <button className=" btn btn-default btn-xs" onClick={() => {this.unItemList(index)}}>
                                    <span className="glyphicon glyphicon-remove"></span>
                                </button>
                            </div>
                            <br/>
                        </div>

                    );
                })}
                </ReactCSSTransitionGroup>
            </div>

        );
    }
}

export default AddTodo;
