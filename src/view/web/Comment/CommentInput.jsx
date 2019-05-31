import React from "react";
import propTypes from "prop-types";
export default class CommentInput extends React.Component {
  static propTypes = {
    onSubmit: propTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      cotent: ""
    };
  }
  changeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };
  changeContent = e => {
    this.setState({
      content: e.target.value
    });
  };
  handleSubmit = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      });
    }
    this.setState({ content: "" });
  };
  _saveUsername = username => {
    localStorage.setItem("username", username);
  };
  _loadUsername = () => {
    const username = localStorage.getItem("username");
    if (username) {
      this.setState({ username });
    }
  };
  handleUsernameBlur = event => {
    this._saveUsername(event.target.value);
  };
  componentWillMount() {
    this._loadUsername();
  }
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onChange={this.changeUsername}
              onBlur={this.handleUsernameBlur}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              ref={textarea => (this.textarea = textarea)}
              value={this.state.content}
              onChange={this.changeContent}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.textarea.focus();
  }
}
