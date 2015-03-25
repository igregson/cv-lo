'use strict'
var React = require('react')
var BtnPrevStep = require('./BtnPrevStep')
var BtnNextStep = require('./BtnNextStep')



module.exports = React.createClass ({
  render: function() { 
    return (
      <div className="primary">
        <div className="step step--instructions">

          <div className="step--indicator">1</div>
          <p className="step--message">Instructions</p>

          <div className="step--body">
            <p>
              <ul>
                <li>Create a Trello board</li>
                <li>Each list on your board will become a section of your resume</li>
                <li>Each list item ("card") will be a resume entry for that section</li>
                <li>Add descriptions to list items (optional)</li>
                <li>Create special "bio" list with cards tagged "bio" for the meta-aspects of your cv</li>
              </ul>
            </p>
            <p>TLDR:<br />
              Learn by example...<br />
              <a href="https://trello.com/b/dldEmt0w/resume-example-for-cv-lo" target="blank">View/Use our sample resume board</a>
            </p>
          </div>

          <BtnPrevStep prevStep={this.props.prevStep} />
          <BtnNextStep nextStep={this.props.nextStep} />

        </div>
      </div>
    )
  }
})

