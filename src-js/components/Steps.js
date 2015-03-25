'use strict'
var React            = require('react')
var Welcome          = require('./Welcome')
var StepAuth         = require('./StepAuth')
var StepChooseStyle  = require('./StepChooseStyle')
var StepCreatingCv   = require('./StepCreatingCv')
var StepViewCv       = require('./StepViewCv')



module.exports = React.createClass({

  getInitialState: function() {
    return {
      step : 1,
      board : ""
    }
  },
  
  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },
  
  prevStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },

  sayHello: function(sayHello) {
    console.log('say ' + sayHello)
  },

  setData: function(data) {
    console.log(data)
    this.setState({
      data : data
    })
  },

  showStep: function() {
    switch (this.state.step) {

      case 1: 
      return <Welcome 
              nextStep={this.nextStep}
              prevStep={this.prevStep} />
      case 2: 
      return <StepAuth
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              setData={this.setData} 
              sayHello={this.sayHello} 
              data={this.state.data} />
      case 3: 
      return <StepChooseStyle
              nextStep={this.nextStep}
              prevStep={this.prevStep} 
              data={this.state.data} />
      case 4: 
      return <StepCreatingCv
              nextStep={this.nextStep}
              prevStep={this.prevStep} 
              data={this.state.data} />              
      case 5: 
      return <StepViewCv 
              prevStep={this.prevStep}
              data={this.state.data} />
    }
  },

  render: function() {
    return (
      <div>
        {this.showStep()}
      </div>
    )
  }


})
