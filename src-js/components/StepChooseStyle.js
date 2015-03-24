'use strict'
var React = require('react')
var BtnPrevStep = require('./BtnPrevStep')
var BtnNextStep = require('./BtnNextStep')



module.exports = React.createClass ({
  render: function() { 
    
    var boardName = this.props.data.body.name

    return (
      <div className="primary">
        <div className="step step--chooseBoard">

          <div className="step--indicator">2</div>
          <p className="step--message">Choose Style</p>

          <div className="step--body">
            <div className="template--thumb">
              <img src="http://placehold.it/200x200" />
            </div>
            <div className="template--thumb">
              <img src="http://placehold.it/200x200" />
            </div>
            <div className="template--thumb">
              <img src="http://placehold.it/200x200" />
            </div>
            <div className="template--thumb">
              <img src="http://placehold.it/200x200" />
            </div>
          </div>

          <BtnPrevStep prevStep={this.props.prevStep} />
          <BtnNextStep nextStep={this.props.nextStep} />

        </div>
      </div>
    )
  }
})