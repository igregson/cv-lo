'use strict'
var React = require('react')
var BtnPrevStep = require('./BtnPrevStep')



module.exports = React.createClass ({
  render: function() { 
          // <div className="step--indicator">3</div>
    return (
      <div className="primary">
        <div className="step step--chooseBoard">

          <p className="step--message">Thanks for using cv-Lo</p>

          <div className="step--body">
            <p><b>SHARE: <br />
              <a className="link--twitter" href="#">Twitter</a> / <a className="link--facebook" href="#">Facebook</a>
            </b></p>
            <p><b>CONNECT: <br />
              <a className="link--twitter" href="mailto:isaac@cv-lo.com">Email</a> / <a className="link--twitter" href="http://twitter.com/igregson">Twitter</a>
            </b></p>
            <p><b>CONTRIBUTE: <br />
              <a className="link--github" href="https://github.com/igregson/cv-lo">Github</a>
            </b></p>
          </div>

          <BtnPrevStep prevStep={this.props.prevStep} />

        </div>
      </div>
    )
  }
})

