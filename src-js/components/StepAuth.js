'use strict'
var React = require('react')
var BtnPrevStep = require('./BtnPrevStep')
var BtnNextStep = require('./BtnNextStep')
var TrelloAuth = require('./TrelloAuth')
var StepAuth_connect = require('./StepAuth_connect')
var StepAuth_connected = require('./StepAuth_connected')
var request = require('superagent')



module.exports = React.createClass ({

  getInitialState: function() {
    return { trelloStatus : "notConnected" }
  },

  connect: function(rawUrl) {
    // rawUrl is passed from StepAuth_connect
    var id = rawUrl.substring(rawUrl.lastIndexOf('https://trello.com/b/'),rawUrl.lastIndexOf('/')).substring('htts://trello.com/b//'.length)
    var url = 'https://api.trello.com/1/board/'+id+'?key=0f3846dc183fa1c176de53dab91b2ba0&cards=open&lists=open'
    if (!id) { 
      this.setState({ trelloStatus : "errorBasic" }) 
      return
    }

    // capture the current component before the request
    var currentComponent = this

    // make request
    request 
    .get(url)
    .end(function(err, data) {

      if (err && err.status == 401) {
        currentComponent.setState({ trelloStatus : "errorTrello" })

      } else if (err && err.status !== 401) { 
        currentComponent.setState({ trelloStatus : "errorBasic" }) 

      } else if (data) {
        // on success, update appropriate states
        currentComponent.setState({ trelloStatus : "connected" })
        currentComponent.props.setData(data)
      }
    })
  },

  renderOnConnectedStatus: function() {
    switch (this.state.trelloStatus) {

      case "notConnected":
        return <StepAuth_connect
                sendRequest={this.connect}
                prevStep={this.props.prevStep}
                trelloStatus="" />

      case "errorBasic": 
        return <StepAuth_connect
                sendRequest={this.connect}
                prevStep={this.props.prevStep}
                trelloStatus="errorBasic" />

      case "errorTrello": 
        return <StepAuth_connect 
                sendRequest={this.connect} 
                prevStep={this.props.prevStep}
                trelloStatus="errorTrello" />

      case "connected": 
        return <StepAuth_connected 
                nextStep={this.props.nextStep} 
                prevStep={this.props.prevStep}
                data={this.props.data} />
    }
  },
  

  render: function() {

    return (
      <div>
        {this.renderOnConnectedStatus()}
      </div>
    )
  }
})