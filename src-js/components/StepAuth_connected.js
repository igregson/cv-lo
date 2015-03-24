'use strict'
var React = require('react')
var BtnPrevStep = require('./BtnPrevStep')
var BtnNextStep = require('./BtnNextStep')
var TrelloAuth = require('./TrelloAuth')


module.exports = React.createClass({


  render: function() {
    // var boardName = this.props.data

    return (
      <div className="primary">
        <div className="step step--connect">

          <div className="step--indicator">1</div>
          <p className="step--message">Great!</p>

          <div className="step--body">
            <p>Successfully connected.</p>
            <p>Head on to the next step...</p>
          </div>

          <BtnPrevStep prevStep={this.props.prevStep} />
          <BtnNextStep nextStep={this.props.nextStep} />

        </div>
      </div>     

    )
  }
})
