'use strict'
var React = require('react')
var BtnPrevStep = require('./BtnPrevStep')
var BtnNextStep = require('./BtnNextStep')
var TrelloAuth = require('./TrelloAuth')


module.exports = React.createClass({


  render: function() {
    
    var imgCheckStyle = {
      
    }

    return (
      <div className="primary">
        <div className="step step--connect">

          <p className="step--message">Connected!</p>

          <div className="step--body">
            <img style={imgCheckStyle} src="/images/check.svg" />
            <p><b>Great!<br /> 
            Your resume awaits....</b></p>
          </div>

          <BtnPrevStep prevStep={this.props.prevStep} />
          <BtnNextStep nextStep={this.props.nextStep} text="Go To Resume" />

        </div>
      </div>
    )
  }
})
