'use strict'
var React            = require('react')
var Welcome          = require('./Welcome')
var StepAuth         = require('./StepAuth')
var StepInstructions = require('./StepInstructions')
var StepChooseStyle  = require('./StepChooseStyle')
var StepCv           = require('./StepCv')
var StepEnd          = require('./StepEnd')



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
              nextStep={this.nextStep} />
      case 2:
      return <StepInstructions
              nextStep={this.nextStep}
              prevStep={this.prevStep} />

      case 3: 
      return <StepAuth
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              setData={this.setData} 
              data={this.state.data} />
      // case 3: 
      // return <StepChooseStyle
      //         nextStep={this.nextStep}
      //         prevStep={this.prevStep} 
      //         data={this.state.data} />
      case 4: 
      return <StepCv
              nextStep={this.nextStep}
              prevStep={this.prevStep} 
              data={this.state.data} />              
      case 5: 
      return <StepEnd 
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
