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

          <div className="step--indicator">&#8226;</div>
          <p className="step--message">Connected!</p>

          <div className="step--body">
            <p>Go to the next step for your Resume.</p>
          </div>

          <BtnPrevStep prevStep={this.props.prevStep} />
          <BtnNextStep nextStep={this.props.nextStep} />

        </div>
      </div>     
    )
  }
})
