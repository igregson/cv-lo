'use strict'
var React = require('react')



module.exports = React.createClass ({

  
  render: function() {
    // var nextText = function() {
    //   return "next"
    //   if (this.props.nextText) {
    //     return this.props.nextText 
    //   } else {
    //     return "next"
    //   }
    // }

    return (
      <div className="step--btn step--btn_next">
        <button onClick={this.props.nextStep}>Next</button>
      </div>
    )
  }

})
