import React, {Component} from 'react'
import { Card, Button } from 'react-bootstrap'
import './cardProduct.css'
import {connect} from 'react-redux'
import {addToCardAction} from '../../store/actions/actions'

class CardProduct extends Component  {
  state = {showButton:false}
  render()

  {
    const handleAddToCard = ()=> {
     this.props.addToCardAction (this.props.data)
    }
    return (
    <div>
      <Card onMouseOver={()=> {this.setState({showButton:true})}} onMouseOut={()=> {this.setState({showButton:false})}} style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {this.props.data.Src}/>
        <Card.Body>
          <Card.Title>{this.props.data.Nom}</Card.Title>
          <Card.Text>
            <div className="cardPrix">
              <div className="Prix">
              {this.props.data.Prix}
              </div>
              <div className="Reduction">
              {this.props.data.Reduction}
              </div>
            </div>
            <div>
              {
                ["", "", "", "", ""].map((element0, index) => {
                  return (

                    index < this.props.data.Rating ? <span className="fa fa-star checked"></span> : <span className="fa fa-star "></span>

                  )
                }
                )
              }
            </div>
          </Card.Text>
          <Button onClick= {handleAddToCard} style= { {display:this.state.showButton?"":"none"} } variant="primary">J'achète</Button>
        </Card.Body>
      </Card>
    </div>
  )}
}
/* action qui va ajouter un produit, ajouter produit au store*/
const MapDispatchToProps = (dispatch ) => {
  return {
    addToCardAction : (data) => dispatch (addToCardAction(data))
  }
}

export default connect(null,MapDispatchToProps)(CardProduct)
