import React, {Component} from 'react';
import AddTodo from './AddTodo.js';

const posts = {
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
    setList: function (label) {
        let post = {
            label: label
        };

        posts.list.push(post);
    },
    unsetList: function (index) {
        delete posts.list[index];
    }

};

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo todo={posts}/>
            </div>
        );
    }
}

export default App;
