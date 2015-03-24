'use strict'
var React = require('react')
var BtnPrevStep = require('./BtnPrevStep')
var BtnNextStep = require('./BtnNextStep')



module.exports = React.createClass ({
  render: function() { 
    return (
      <div className="primary">
        <div className="step step--chooseBoard">

          <div className="step--indicator">3</div>
          <p className="step--message">View/Print/Download Resume</p>

          <div className="step--body">
            Your resume is done!
          </div>

          <BtnPrevStep prevStep={this.props.prevStep} />
          <BtnNextStep nextStep={this.props.nextStep} />

        </div>
      </div>
    )
  }
})

