'use strict'
var React = require('react')
var BtnPrevStep = require('./BtnPrevStep')
var BtnNextStep = require('./BtnNextStep')
var _ = require('lodash')


module.exports = React.createClass ({
  render: function() { 
    

    var data = this.props.data.body


    // ---------------- KEYS -------------------
    var lists = []
    for (var i = 0; i < data.lists.length; i++) {
      var list = data.lists[i]

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

      // skip cards labeled 'ignore' --- investigate better approach for this
      if (!card.labels[0] || (card.labels[0].name !== 'ignore') ) {

        // check for labels, use label name as style name
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

        // -------------- DESC/LIST ALGORITHM ---- 
        // check and act for paragraph followed by list
        if ( card.desc && card.desc.indexOf('\n\n') > -1 && card.desc.indexOf('\n') > -1) {
          // just paragraphs here
          cards.push({
            id: card.idList,
            text: card.desc.substring(0, card.desc.indexOf('\n\n')),
            style: 'paragraph'
          }) 
          // just lists items here
          if ( card.desc.indexOf('\n') > -1) {
            // remove everything after last instance of \n\n
            var ul = card.desc.substring(card.desc.lastIndexOf("\n\n") + 1)
            cards.push({
              id: card.idList,
              ul: ul.split('\n-'),
              style: 'list'
            }) 
          }
        } else if ( card.desc.indexOf('\n-') > -1) {
        // no paragarph, just list items
          cards.push({
            id: card.idList,
            // split on markdown list delimiter due to no 
            // line break before first list item. 
            // This will likely break things if inside of 
            // a list "-" is used... 
            // TODO: find a better approach to remove the
            // first markdown list item
            // HOW? 
            // - parse the text as markdown? likely won't 
            // work due to the pdf library not taking html
            ul: card.desc.split('-'),
            style: 'list'
          }) 
        } else if ( card.desc ) {
          cards.push({
            id: card.idList,
            text: card.desc,
            style: 'paragraph'
          }) 
        }
      }
    } // end loop
    // console.dir(cards)
    console.log(cards)


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
      "content": content,
      "styles": {
        "name": {
          "fontSize": 16,
          "bold": true,
          "alignment": "center",
          "marginBottom": 8
        },
        "label": {
          "fontSize": 10,
          "alignment": "center",
          "marginBottom": 3
        },
        "location": {
          "fontSize": 10,
          "italic": true,
          "alignment": "center"
        },
        "sectionHeader": {
          "fontSize": 12,
          "bold": true,
          "marginTop": 17,
          "marginBottom": 7
        },
        "subheader": {
          "fontSize": 10,
          "bold": true,
          "marginTop": 5,
          "marginBottom": 5,
          "marginLeft": 15
        },
        "paragraph": {
          "fontSize": 10,
          "marginTop": 3,
          "marginBottom": 3,
          "marginLeft": 25
        },
        "list": {
          "fontSize": 10,
          "marginLeft": 25,
          "marginTop": 3,
          "marginBottom": 3,
        }
      }
    }

    console.log(docDefinition)
    var pdfOpen = function() { pdfMake.createPdf(docDefinition).open() }

    return (
      <div className="primary">
        <div className="step step--chooseBoard">

          <p className="step--message">Your CV :)</p>

          <div className="step--body">
            <button className="btn--default btn--pdf" onClick={pdfOpen}>Open Resume PDF</button>
          </div>

          <BtnPrevStep prevStep={this.props.prevStep} />
          <BtnNextStep nextStep={this.props.nextStep} text="There's more" />

        </div>
      </div>
    )
  }
})


// TODO: finish integrating support for json export 
// of a schema to use with Json Resume - https://jsonresume.org/
// The Below is a (meager) start... 



    // var jsonSchema_top = []
    // _.forEach(data.lists, function(n) {
    //   jsonSchema_top.push({
    //     pos: n.pos,
    //     id: n.id,
    //     text: n.name
    //   })
    // })
    // var jsonSchema_nested = []
    // _.forEach(data.cards, function(n) {


    //   if (n.labels[0]) {
    //     jsonSchema_nested.push({
    //       closed: n.closed,
    //       id: n.idList,
    //       text: n.name,
    //       label: n.labels[0].name,
    //       desc: n.desc,
    //       ul: n.desc.split('\n-')
    //     })  
    //   } else {
    //     jsonSchema_nested.push({
    //       closed: n.closed,
    //       id: n.idList,
    //       text: n.name,
    //       desc: n.desc,
    //       ul: n.desc.split('\n-')
    //     })
    //   }
    // })
    
    // console.log(jsonSchema_nested)


    // var arrayConcated = jsonSchema_top.concat(jsonSchema_nested)

    // var arrayCombined = _.chain(arrayConcated)
    //   // this is the magic...
    //   .groupBy('id')
    //   // Only section headers have a position in our array (not)
    //   // the json from Trello, due to the way they use the 
    //   // value (it only translates sequentially for lists, not 
    //   // cards)
    //   // Thus -- get things in the right order via 'pos' on 
    //   //         section headers
    //   .sortByAll(['pos'])
    //   // now that they're in the proper order, undo the group
    //   .flatten()
    //   // return the value
    //   .value();
    //   console.log(arrayCombined)