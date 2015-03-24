'use strict'
var React = require('react')



module.exports = React.createClass ({
  
  render: function() {
    return (
      <div className="step--btn step--btn_next">
        <button onClick={this.props.nextStep}>Next</button>
      </div>
    )
  }

})
