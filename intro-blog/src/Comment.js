import React, {Component} from 'react';

class Comment extends Component {
  render() {
    return (

      <div>
        <p> {this.props.body} </p>
        <h3> {this.props.author} </h3>
        <p> {this.props.dateAdded} </p>
      </div>


      )
  }
}

export default Comment;
