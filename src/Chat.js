import React, { Component } from 'react'
import ChatHeader from './ChatHeader'
import MessageForm from './MessageForm';
import MessageList from './MessageList';
class Chat extends Component {
  render() {
    return (
      <div className="Chat">
        <ChatHeader />
        <MessageList/>
        <MessageForm/>
        Chat
      </div>
    )
  }
}

export default Chat