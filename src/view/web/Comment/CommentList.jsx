import React from "react";
import CommentItem from "./CommentItem";
export default class CommentList extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  static defaultProps = {
    comments: []
  }
  componentDidUpdate(){
    
  }
  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => (
          <CommentItem comment={comment} key={i} />
        ))}
      </div>
    );
  }
}
