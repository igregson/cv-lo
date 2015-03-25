'use strict'
var React = require('react')
var BtnPrevStep = require('./BtnPrevStep')
var BtnNextStep = require('./BtnNextStep')
// var pdfMake = require('../vendor/pdfmake')
// var createPdf = require('../vendor/vfs_fonts')



module.exports = React.createClass ({
  render: function() { 
    
    var data = this.props.data.body

    // KEYS
    var lists = []
    for (var i = 0; i < data.lists.length; i++) {
      var list = data.lists[i]

      lists.push({
        text: list.name, 
        id: list.id,
        style: 'sectionHeader'
      })
    }
    // console.dir(lists)

    // VALUES
    for (var i = 0; i < data.cards.length; i++) {
      var card = data.cards[i]

      // nested array to add each card 
      // to its parent list
      // TODO: figure out a better way to go
      //       about this that doesn't need a 
      //       nested loop
      for (var j = 0; j < lists.length; j++) {
        var list = lists[j]
        if (card.idList === list.id) {
          lists.splice(j + 1, 0, {
            text: card.name,
            style: 'subheader'
          })
          // if there's a description, add it to array
          // just after the last one added, hence "j + 2"
          if ( card.desc ) {
            lists.splice(j + 2, 0, {
              text: card.desc,
              style: 'paragraph'
            }) 
          }
        }
      } // end nested loop
    } // end loop

    // var content = [
    //   {
    //     text: data.,
    //     style: 'header'
    //   }
    // ]

    // content.splice(1, 0, lists)    
    var content = lists



    var docDefinition = {

      content: content,

      styles: {
        header: {
          fontSize: 22,
          bold: true,
          alignment: 'center',
          marginBottom: 10
        }, 
        sectionHeader: {
          fontSize: 19,
          bold: true,
          marginBottom: 7
        },
        subheader: {
          fontSize: 12,
          bold: true,
          marginBottom: 2
        },
        paragraph: {
          fontSize: 12,
          marginBottom: 2
        }
      }
    }

    console.log(docDefinition)

    var pdfOpen = function() { pdfMake.createPdf(docDefinition).open() }

    return (
      <div className="primary">
        <div className="step step--chooseBoard">

          <div className="step--indicator">2</div>
          <p className="step--message">Choose Style</p>

          <div className="step--body">
            <p>Hold Tight...</p>
            <p>Creating your CV...</p>
            <button className="btn--default" onClick={pdfOpen}>Open CV</button>
          </div>

          <BtnPrevStep prevStep={this.props.prevStep} />
          <BtnNextStep nextStep={this.props.nextStep} />

        </div>
      </div>
    )
  }
})