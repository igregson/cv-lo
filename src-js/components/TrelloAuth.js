'use strict'
var React = require('react')
var request = require('superagent')



module.exports = React.createClass({

  render: function() {
    // var loggedInMessage = this.state.loggedin ? "Welcome!" : ""
    var loggedInMessage = 'hi!'
    return (

      <div className="btn--info">

        <a href="#" onClick={this.connect}>Connect</a>
        <br />
        <a href="#" onClick={this.disconnect}>Disconnect</a>

        <p>{loggedInMessage}</p>
      </div>

    )
  }
})

