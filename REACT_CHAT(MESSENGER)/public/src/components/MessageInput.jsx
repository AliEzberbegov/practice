/** @jsx React.DOM */

"use strict";

var MessageInput = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      message: "",
    };
  },

  keyHandler: function (event) {
    var message = this.state.message;

    if (event.keyCode === 13 && message) {
      this.props.messageHandler(message);
      this.setState({
        message: "",
      });
    }
  },

  render: function () {
    return (
      <input
        className="form-control"
        type="text"
        placeholder="ENTER YOUR MESSAGE..."
        valueLink={this.linkState("message")}
        onKeyUp={this.keyHandler}
      />
    );
  },
});
