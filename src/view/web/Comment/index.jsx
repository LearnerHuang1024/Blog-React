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
  componentWillMount () {
    this._loadComments()
  }

  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }
  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
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
    this._saveComments(this.state.comments)
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