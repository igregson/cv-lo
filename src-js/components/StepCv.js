'use strict'
var React = require('react')
var BtnPrevStep = require('./BtnPrevStep')
var BtnNextStep = require('./BtnNextStep')
var parseJson = require('./../lib/parseJson')
var _ = require('lodash')
// var pdfMake = require('../vendor/pdfmake')
// var createPdf = require('../vendor/vfs_fonts')



module.exports = React.createClass ({
  render: function() { 
    
    var data = this.props.data.body


    // KEYS
    var lists = []
    for (var i = 0; i < data.lists.length; i++) {
      var list = data.lists[i]

        console.log(list.name)
        lists.push({
          text: list.name, 
          id: list.id,
          style: 'sectionHeader'
        })
    }
    console.dir(lists)

    // VALUES
    // for (var i = 0; i < data.cards.length; i++) {
    //   var card = data.cards[i]

      // nested array to add each card 
      // to its parent list
      // TODO: consider a way to approach this 
      //       without a nested loop, if there
      //       is one
      // for (var j = 0; j < lists.length; j++) {
      //   var list = lists[j]
      //   if (card.idList === list.id && card.labels) {

      //   } else if (card.idList === list.id) {
      //     lists.splice(j + 1, 0, {
      //       text: card.name,
      //       style: 'subheader'
      //     })
      //     // if there's a description, add it to array
      //     // just after the last one added, hence "j + **2**"
      //     if ( card.desc ) {
      //       lists.splice(j + 2, 0, {
      //         text: card.desc,
      //         style: 'paragraph'
      //       }) 
      //     }
      //   }
      // } // end nested loop
    // } // end loop
    var cards = []
    for (var i = 0; i < data.cards.length; i++) {
      var card = data.cards[i]

      cards.push({
        id: card.idList,
        text: card.name,
        style: 'subheader'
      })
      // if there's a description, add it 
      if ( card.desc ) {
        cards.push({
          id: card.idList,
          text: card.desc,
          style: 'paragraph'
        }) 
      }
    } // end loop
    console.dir(cards)


    // var arrayCombined = lists.concat(cards).sort(function(a,b) {

    //   return (a.id < b.id) ?  1 : 
    //         ((a.id > b.id) ? -1 : 0);

    //   // if (a.id < b.id) {
    //   //   return 1
    //   // } else if (a.id > b.id) {
    //   //   return -1
    //   // } else {
    //   //   return 0
    //   // }

    // }).reverse()
    var arrayConcated = lists.concat(cards)
    var arrayCombined = _.sortByAll(arrayConcated, 'id')

    // var result = [];
    // // Atleast one of the arrays should have elements
    // while(lists.length || cards.length) {
    //     // If both of them have elements
    //     if (lists.length && cards.length) {
    //         // Compare the first elements's ids
    //         if (lists[0].id <= cards[0].id) {
    //             // If short's id is smaller then push short's element
    //             result.push(lists.shift());
    //         } else {
    //             // otherwise long's element
    //             result.push(cards.shift());
    //         }
    //     } else if (lists.length) {
    //         // we have only short's elements left.
    //         result.push(lists.shift());
    //     } else {
    //         // we have only long's elements left.
    //         result.push(cards.shift());
    //     }
    // }

    console.dir(arrayCombined)
    // console.dir(result)

    // remove first header (since it's just for bio/meta info)
    // lists.shift()
    var content = arrayCombined
    // var content = result

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
          marginTop: 7,
          marginBottom: 7
        },
        subheader: {
          fontSize: 12,
          bold: true,
          marginTop: 4,
          marginBottom: 2
        },
        paragraph: {
          fontSize: 12,
          marginTop: 1,
          marginBottom: 2
        }
      }
    }

    // console.log(content)
    // console.log(docDefinition)

    var pdfOpen = function() { pdfMake.createPdf(docDefinition).open() }

          // <div className="step--indicator">3</div>
    return (
      <div className="primary">
        <div className="step step--chooseBoard">

          <p className="step--message">Here you go :)</p>

          <div className="step--body">
            <button className="btn--default" onClick={pdfOpen}>Open Resume</button>
          </div>

          <BtnPrevStep prevStep={this.props.prevStep} />
          <BtnNextStep nextStep={this.props.nextStep} />

        </div>
      </div>
    )
  }
})

