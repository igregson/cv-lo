'use strict'
var React = require('react')
var BtnPrevStep = require('./BtnPrevStep')



module.exports = React.createClass ({

  onClickTwitter: function(e) {
    e.preventDefault()
    var shareTwitter = "https://twitter.com/share?text=&amp;url=http://cv-lo.com"
    window.open(shareTwitter, 'twitter-share', 'width=550,height=235')
    return false
  },

  onClickFacebook: function(e) {
    e.preventDefault()
    var shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=http://cv-lo.com"
    window.open(shareFacebook, 'facebook-share','width=580,height=296')
    return false
  },

  render: function() { 
    
    return (
      <div className="primary">
        <div className="step step--chooseBoard">

          <p className="step--message">Thanks for using cv-Lo</p>

          <div className="step--body">
            <p>SHARE: <br />
              <a className="link--twitter" href="#" onClick={this.onClickTwitter}>Twitter</a> 
              / <a className="link--facebook" href="#" onClick={this.onClickFacebook}>Facebook</a>
            </p>
            <p>CONNECT: <br />
              <a className="link--twitter" href="mailto:isaac@cv-lo.com">Email</a> / <a className="link--twitter" href="http://twitter.com/igregson">Twitter</a>
            </p>
            <p>CONTRIBUTE: <br />
              <a className="link--github" href="https://github.com/igregson/cv-lo">Github</a>
            </p>
          </div>

          <BtnPrevStep prevStep={this.props.prevStep} text="Back to CV" />

        </div>
      </div>
    )
  }
})


// <a class="icon post-footer--share-link icon-twitter" href="https://twitter.com/share?text=&amp;url=/simplet/demo/test-post-10/" onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;">