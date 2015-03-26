'use strict'
var React = require('react')
var BtnPrevStep = require('./BtnPrevStep')
var BtnNextStep = require('./BtnNextStep')
var Errors = require('./StepAuth_errors')



/* demo url: 
https://trello.com/b/dldEmt0w/resume-example-for-cv-lo
*/

module.exports = React.createClass({

  handleClick: function(e) {
    e.preventDefault() 

    // Isolate board id from user-submited url
    // Send this url to parent component via props callback
    // string manipulatin for now. half-there regex: https:\/\/trello.com\/b\/(.*?)\/
    var rawUrl = this.refs.boardUrl.getDOMNode().value
    this.props.sendRequest(rawUrl)
  },


  render: function() {

          // <div className="step--indicator">2</div>
    return (

      <div className="primary">
        <div className="step step--connect">

          <p className="step--message">Connect to Trello Resume Board</p>

          <div className="step--body">
            <form>
              <input className="input--default" type="text" placeholder="Paste Trello-board Public URL Here" ref="boardUrl" autoFocus="true" />
              <br />
              <button className="btn--default" onClick={this.handleClick}>CONNECT TO BOARD</button>
            </form>
          </div>

          <Errors trelloStatus={this.props.trelloStatus} />
          <BtnPrevStep prevStep={this.props.prevStep} />

        </div>
      </div>
    )
  }

})

