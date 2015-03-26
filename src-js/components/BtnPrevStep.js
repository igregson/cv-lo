'use strict'
var React = require('react')



module.exports = React.createClass ({


  getDefaultProps: function() {
    return {
      text: 'Prev'
    }
  },


  render: function() {
    return (
      <div className="step--btn step--btn_prev">
        <button onClick={this.props.prevStep}>{this.props.text}</button>
      </div>
    )
  }

})
