import React, {Component} from 'react';
import SearchPost from './SearchPost.js';

const posts = {
    menu: [
        {
            link: '/articles',
            label: 'Articles'
        },
        {
            link: '/contacts',
            label: 'Contacts'
        },
        {
            link: '/posts',
            label: 'Posts'
        }
    ],
    setMenu: function (link, label) {
        let post = {
            link: link,
            label: label
        };

        posts.push(post);
    }
};

class App extends Component {
    render() {
        return (
            <div>
                <SearchPost posts={posts}/>
            </div>
        );
    }
}

export default App;
