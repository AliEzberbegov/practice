/** @jsx React.DOM */

"use strict";

var ChatMessage = React.createClass({
  render: function () {
    var message = this.props.message;
    var date = message.date.toLocaleTimeString();
    return (
      <div className="chat-message">
        <div className="chat-message-author">{message.author}</div>
        <div className="chat-message-time">{date}</div>
        <div className="chat-message-content">{message.content}</div>
      </div>
    );
  },
});
