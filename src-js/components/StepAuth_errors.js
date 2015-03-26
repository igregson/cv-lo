'use strict'
var React = require('react')




module.exports = React.createClass({

  render: function() {

    
    var message 
    if (this.props.trelloStatus === "errorBasic") {
      message =  "Something is wrong. Try again."

    } else if (this.props.trelloStatus === "errorTrello") {
      message = "Make sure your board is public!"

    } else { message = "" }

  
    return (
      <p className="step--message_error">
        {message}
      </p>
    )

  }

})