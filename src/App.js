import React, {Component} from 'react';
import AddTodo from './AddTodo.js';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.getPosts = this.getPosts.bind(this);
        this.setTodoGroups = this.setTodoGroups.bind(this);
        this.unsetTodoGroups = this.unsetTodoGroups.bind(this);
        this.setTodoKeys = this.setTodoKeys.bind(this);
        this.unsetTodoKeys = this.unsetTodoKeys.bind(this);
        this.state = {
            groups: [

                '37756782',
                '42813041'
            ],
            keys: [
                'авари',
                'мчс',
                'дтп'
            ],
            Input: '',
            posts: [],

        };
    }

    getPosts() {

        var temp = [];

        this.state.groups.forEach((group, index) => {
            if (/^[0-9]{8}$/.test(group)) {

                /*var xhr = new XMLHttpRequest();
                xhr.open('GET', "http://sandreev87.000webhostapp.com/?group=" + group.trim(), false);
                xhr.send();
                if (xhr.status == 200) {
                    //console.log(JSON.parse(xhr.responseText));
                    temptttt = temptttt.concat(JSON.parse(xhr.responseText).response.items);
                }*/

                fetch("http://sandreev87.000webhostapp.com/?group=" + group.trim())
                    .then(result => result.json())
                    .then(items => {

                        this.state.keys.forEach((key) => {

                            let check = false;

                            items.response.items.forEach((item) => {

                                if(item.text.toLowerCase().indexOf(key.toLowerCase()) + 1 && !check) {
                                    temp = temp.concat(item);
                                    check = true;
                                    return item;
                                }

                            });

                        });
                    });
            }
        });

        setTimeout(() => {

            console.log(temp.length);
            this.setState({posts: temp});

        },15000);
    }

    componentDidMount() {
        this.getPosts();
        setInterval(this.getPosts, 25000);
    }


    setTodoGroups(label) {
        let posts = this.state.groups;
        posts.push(label);
        this.setState({groups: posts});
    }

    unsetTodoGroups(index) {
        let posts = this.state.groups;
        delete posts[index];
        this.setState({groups: posts});
    }

    setTodoKeys(label) {
        let posts = this.state.keys;
        posts.push(label);
        this.setState({keys: posts});
    }

    unsetTodoKeys(index) {
        let posts = this.state.keys;
        delete posts[index];
        this.setState({keys: posts});
    }


    onChangeHandler(e) {
        this.setState({Input: e.target.value});
    }

    render() {

        this.state.posts.sort((a, b) => {
            return a.date - b.date;
        }).reverse();

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 margin_col">
                        <AddTodo todo={this.state.groups} setList={this.setTodoGroups}
                                 unsetList={this.unsetTodoGroups}/>
                    </div>
                    <div className="col-sm-6 margin_col">
                        <div className="bar">
                            <br/><input className="input_search" onChange={this.onChangeHandler.bind(this)} type="text"
                                        placeholder="Введите текст для поиска"/><br/>

                            {
                                this.state.posts.filter((post) => {
                                    return post.text.toLowerCase().match(this.state.Input.trim().toLowerCase());
                                })
                                    .map((item, index) => {
                                        return (

                                            <div className="text_item" key={index}>
                                                <h3>{item.date}</h3>
                                                <div>{item.text}</div>
                                                <br/>
                                            </div>

                                        );
                                    })

                            }

                        </div>
                    </div>
                    <div className="col-sm-3 margin_col">
                        <AddTodo todo={this.state.keys} setList={this.setTodoKeys} unsetList={this.unsetTodoKeys}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
