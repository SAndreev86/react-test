import React, {Component} from 'react';
import AddTodo from './AddTodo.js';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    label: 'Articles'
                },
                {
                    label: 'Contacts'
                },
                {
                    label: 'Posts'
                }
            ],
            Input: '',
            posts: [
                {
                    text: 'Articles'
                },
                {
                    text: 'Contacts'
                },
                {
                    text: 'Posts'
                }
            ]

        };
    }

    setList(label) {
        let posts = this.state.list;

        posts.push({
            label: label
        });

        this.setState({list: posts});
    }

    unsetList(index) {
        let posts = this.state.list;
        delete posts[index];
        this.setState({list: posts});
    }

    onChangeHandler(e) {
        this.setState({ Input: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 margin_col">
                        <AddTodo todo={this.state.list} setList={this.setList.bind(this)} unsetList={this.unsetList.bind(this)}/>
                    </div>
                    <div className="col-sm-6 margin_col">
                        <div className="bar">
                            <br/><input className="input_search" onChange={this.onChangeHandler.bind(this)} type = "text" placeholder="Введите текст для поиска"/><br/>

                            {

                                this.state.list.filter( (post) => {
                                    return post.label.toLowerCase().match(this.state.Input.trim().toLowerCase());
                                })
                                    .map((item, index) => {
                                        return (

                                            <div className="text_item" key={index}>
                                                <div>{item.label}</div><br/>
                                            </div>

                                        );
                                    })

                            }

                        </div>
                    </div>
                    <div className="col-sm-3 margin_col">
                        <AddTodo todo={this.state.list} setList={this.setList.bind(this)} unsetList={this.unsetList.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
