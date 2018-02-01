import React, {Component} from 'react';
import Comment from './Comment';

class Post extends Component {

  renderComments(){

    return this.props.comments.map((comment) => {
      return (
          <Comment body={comment.body}
                   author={comment.author}
                   dateAdded={comment.dateAdded} />
        )
    })
  }

  render(){
    return(
        <div>
          <h1> {this.props.title} </h1>
          <h3> {this.props.author}</h3>
          <p>  {this.props.body}  </p>
          <h3> Comments: {this.renderComments()} </h3>
        </div>

      );
  }
}

export default Post;
