'use strict'
var React = require('react')



module.exports = React.createClass ({

  
  getDefaultProps: function() {
    return {
      text: 'Next'
    }
  },


  render: function() {
    return (
      <div className="step--btn step--btn_next">
        <button onClick={this.props.nextStep}>{this.props.text}</button>
      </div>
    )
  }

})
