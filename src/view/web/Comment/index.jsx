import React from 'react'
import CommentInput from '@/view/web/Comment/CommentInput'
import CommentList from '@/view/web/Comment/CommentList'
import './index.css'

export default class CommentApp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      comments:[]
    }
  }
  handleSubmit = comment => {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    console.log(comment)
    let arr = this.state.comments
    arr.push(comment)
    this.setState({
      comments:arr
    })
  }
  render(){
    return (
      <div className='wrapper'>
        <CommentInput
        onSubmit={this.handleSubmit}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }

}