'use strict'
var React = require('react')
var BtnNextStep = require('./BtnNextStep')



module.exports = React.createClass ({
  render: function() {
    return (
      <div className="primary">
        <div className="step step--welcome">

          <p className="step--message">A Free &amp; Easy Tool<br /> Trello board &#8594; Resume</p>

          <div className="btn--info">
            <a href="#">Learn how to Structure Your Trello Board</a>
          </div>

          <BtnNextStep nextStep={this.props.nextStep} />

        </div>
      </div>
    )    
  }
})

