/* 

TODO:::
- fix ordering of list items in generated json (cards)
- add more content to demo board
- style the resume
- --- 
- buy domain - cv-lo.com
- configure dns
- add to nginx config on isaacgregson.com server
- create emails - isaac and/or info -- @cv-lo.com 
- add google analytics
- launch :)

*/



'use strict'
var React = require('react')
var Steps = require('./components/Steps')



React.render (

  <Steps />,
  document.getElementById('primary-wrap')

)