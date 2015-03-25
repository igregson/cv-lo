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


    // ---------------- KEYS -------------------
    var lists = []
    for (var i = 0; i < data.lists.length; i++) {
      var list = data.lists[i]

        console.log(list.name)
        lists.push({
          pos: list.pos,
          id: list.id,
          text: list.name, 
          style: 'sectionHeader'
        })
    }
    console.dir(lists)
    list = _.sortByAll(lists, 'pos')


    // ---------------- CARDS ------------------
    var cards = []
    for (var i = 0; i < data.cards.length; i++) {
      var card = data.cards[i]

      // check for labels, use label name as style name
      // TODO: be sure to emphasize the "special lables"
      //       in docs
      if (card.labels[0]) {
        cards.push({
          id: card.idList,
          text: card.name,
          style: card.labels[0].name
        })
      } else {
        cards.push({
          id: card.idList,
          text: card.name,
          style: 'subheader'
        })
      }

      // if there's a description, add it 
      if ( card.desc ) {
        cards.push({
          id: card.idList,
          text: card.desc,
          style: 'paragraph'
        }) 
      }
    } // end loop
    // console.dir(cards)


    var arrayConcated = lists.concat(cards)

    var arrayCombined = _.chain(arrayConcated)
      // this is the magic...
      .groupBy('id')
      // Only section headers have a position in our array (not)
      // the json from Trello, due to the way they use the 
      // value (it only translates sequentially for lists, not 
      // cards)
      // Thus -- get things in the right order via 'pos' on 
      //         section headers
      .sortByAll(['pos'])
      // now that they're in the proper order, undo the group
      .flatten()
      // return the value
      .value();


    var content = arrayCombined
    // remove 0 index to since we don't need the bio' header
    content.shift()


    var docDefinition = {
      content: content,
      styles: {
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
        },
        name: {
          fontSize: 22,
          bold: true,
          alignment: 'center',
          marginBottom: 8
        }, 
        headline: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          marginBottom: 10
        },
        location: {
          fontSize: 14,
          italic: true
        },
        current: {
          fontSize: 14,
          italic: true,
          alignment: 'right'
        },
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

