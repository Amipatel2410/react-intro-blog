import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const post = {
  title: 'Baby\'s First Post',
  author: 'Baby',
  body: 'Look at me I\'m a posting baby.',
  comments:[
    { body: 'First!', author: 'Mike', dateAdded: '2017-08-28' },
    { body: 'Great post', author: 'Susan', dateAdded: '2017-08-29' },
    { body: 'Hire him', author: 'Vivian', dateAdded: '2017-08-30' }
  ]
};

ReactDOM.render(<Post
                title={post.title}
                author={post.author}
                body = {post.body}
                comments = {post.comments}/>,
                document.getElementById('root')
             );
registerServiceWorker();
