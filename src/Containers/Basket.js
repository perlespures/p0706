import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer/Footer'
import {connect} from 'react-redux'

 class Basket extends Component {
    render() {
        console.log('result',this.props.products)
        return (
            <div>
                <Header /> 
                
                {/* basket contient grid des produit 
                 contient total nombre 
                 className nom de div */}
                <div className="ShoppingList">
                    {
                        
                        this.props.products.map((element) => {
                            return (
                                <Card>
                                    
                                    <Card.Body style = {{display:"flex"}}>
                                        <div>
                                            {/*img à partir pc prb */} 
                                            <img style = {{height:"200px"}} src= {element.Src} />
                                            
                                        </div>
                                        
                                        <div>
                                            <Card.Title>Special title treatment</Card.Title>
                                            <Card.Text>
                                                With supporting text below as a natural lead-in to additional content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            )
                        }

                        )
                    }

                </div>
                <div className="ShoppingResult">

                </div>
                <Footer />  
            </div>
        );
    }
}
/* importer le produit */
const MapStateToProps =(state) => {
    return {
        products: state.CartReducer.products
    }
}
export default connect(MapStateToProps)(Basket)
  