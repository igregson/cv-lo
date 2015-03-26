'use strict'
var React = require('react')
var BtnPrevStep = require('./BtnPrevStep')







module.exports = React.createClass ({

  onClickTwitter: function(e) {
    e.preventDefault()

    // for centering the share popup
    var left = window.screenX + (window.innerWidth - 550) / 2
    var top = window.screenY + (window.innerHeight - 235) / 2
    var shareTwitter = "https://twitter.com/share?text=&amp;url=http://cv-lo.com"

    window.open(shareTwitter, "twitter-share", "width=550,height=235,top="+top+",left="+left+'"')
    return false
  },

  onClickFacebook: function(e) {
    e.preventDefault()

    // for centering the share popup
    var left = window.screenX + (window.innerWidth - 580) / 2
    var top = window.screenY + (window.innerHeight - 296) / 2
    var shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=http://cv-lo.com"

    window.open(shareFacebook, "facebook-share","width=580,height=296,top="+top+",left="+left+'"')
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
