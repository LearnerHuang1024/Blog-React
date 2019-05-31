import React from 'react'
import propTypes from "prop-types";
export default class CommentItem extends React.Component{
  static propTypes = {
    comment: propTypes.object.isRequired
  }
  constructor () {
    super()
    this.state = { timeString: '' }
  }
  componentWillMount () {
    this._updateTimeString()
    this._timer = setInterval(
      this._updateTimeString.bind(this),
      5000
    )
  }

  _updateTimeString () {
    const comment = this.props.comment
    let duration = (+Date.now() - comment.createdTime) / 1000
    if(duration<60){
      duration = Math.round(Math.max(duration, 1))+'秒前'
    }else if(duration>60 && duration<3600){
      duration = Math.round(duration / 60)+'分钟前'
    }else if(duration>3600 && duration<86400){
      duration = Math.round(duration / 60/60)+'小时前'
    }else if(duration>86400){
      duration = Math.round(duration / 60/60/24)+'天前'
    }
    this.setState({
      timeString: duration
    })
  }

  render(){
    return(
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
      </div>
    )
  }
}