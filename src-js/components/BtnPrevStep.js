'use strict'
var React = require('react')



module.exports = React.createClass ({

  render: function() {
    return (
      <div className="step--btn step--btn_prev">
        <button onClick={this.props.prevStep}>Prev</button>
      </div>
    )
  }

})
