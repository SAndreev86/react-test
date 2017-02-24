import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.setPost = this.setPost.bind(this);
    }

    setPost() {
        console.log("fgfgfgf")
    }

    render() {
        return (
            <div>
                {this.props.posts.menu.map((item, index) =>
                    <a href={item.link} key={index}>{item.label}</a>
                )}
                <form >
                    <input type = "text"/>
                    <input type = "text"/>
                    <button onSubmit={this.setPost}></button>
                </form>
            </div>

        );
    }
}

export default App;
