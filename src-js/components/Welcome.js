'use strict'
var React = require('react')
var BtnNextStep = require('./BtnNextStep')



module.exports = React.createClass ({
  render: function() {
    return (
      <div className="primary">
        <div className="step step--welcome">

          <p className="step--message">A Free &amp; Simple Tool</p>

          <div className="step--body">
            <p><b>for creating resumes from Trello boards.</b></p>
          </div>

          <BtnNextStep nextStep={this.props.nextStep} text="Let's go!" />

        </div>
      </div>
    )    
  }
})
