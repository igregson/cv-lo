'use strict'
var React = require('react')
var BtnPrevStep = require('./BtnPrevStep')
var BtnNextStep = require('./BtnNextStep')
var TrelloAuth = require('./TrelloAuth')


module.exports = React.createClass({


  render: function() {
    
    return (
      <div className="primary">
        <div className="step step--connect">

          <p className="step--message">Connected!</p>

          <div className="step--body">
            <p>Great!<br /> 
            Your resume awaits....</p>
          </div>

          <BtnPrevStep prevStep={this.props.prevStep} />
          <BtnNextStep nextStep={this.props.nextStep} text="Go To Resume" />

        </div>
      </div>
    )
  }
})
