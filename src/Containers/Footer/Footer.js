import React, { Component } from 'react';
import './Footer.css'

let tab = [
  {
      Label: "Couleur",
      Liste: ["Rose", "Bleu", "Blanc", "vert", "rouge", "violet"]
  },
  {
      Label: "Couleur",
      Liste: ["Rose", "Bleu", "Blanc", "vert", "rouge", "violet"]
  },
  {
      Label: "Couleur",
      Liste: ["Rose", "Bleu", "Blanc", "vert", "rouge", "violet"]
  },
]

class Footer extends Component {
  render() {
    return (
      <div>
         <section id="footer">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
          {tab.map(element =>{
            return (
              <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>{element.Label}</h5>
              <ul className="list-unstyled quick-links">
                {element.Liste.map(element0 =>{
                  return(
                    <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />{element0}</a></li>
                  )
                })}
              </ul>
      </div>
       )
    })}
      
     
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
        <ul className="list-unstyled list-inline social text-center">
          <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook" /></a></li>
          <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter" /></a></li>
          <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram" /></a></li>
          <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus" /></a></li>
          <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope" /></a></li>
        </ul>
      </div>
    </div>	
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
        <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
        <p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Sunlimetech</a></p>
      </div>
    </div>
  </div></section>
</div>

)
}
}

export default Footer
