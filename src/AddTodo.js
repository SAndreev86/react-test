import React, {Component} from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.setList = this.setList.bind(this);
        this.unItemList = this.unItemList.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);

        this.state = {
            Input: '',
            listState: this.props.todo.list,
        };
    }



    onChangeHandler(e) {
        this.setState({ Input: e.target.value });
    }

    setList() {
        this.props.todo.setList(this.state.Input);
        this.setState({listState: this.props.todo.list});
    }

    unItemList(e) {
        this.props.todo.unsetList(e);
        this.setState({listState: this.props.todo.list});
    }

    render() {

        return (
            <div>
                <br/><input onChange={this.onChangeHandler} type = "text"/>
                    <button onClick={this.setList}>+</button><br/>

                {this.state.listState.map((item, index) => {
                    return (

                        <div key={index}>
                            <div>{item.label}
                                <button onClick={() => {this.unItemList(index)}}>x</button>
                            </div>
                            <br/>
                        </div>

                    );
                })}

            </div>

        );
    }
}

export default AddTodo;
