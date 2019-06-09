import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import './filters.css'

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
class Filters extends Component {
    render() {
        return (
            <div className= "filters">
             <Form>
               {tab.map(element => {
                   return(
                       <div>
                           <Button>
                               {element.Label}
                           </Button>
                           {element.Liste.map(element0 =>{
                               return(
                                   <Form.Check type= "checkbox" label = {element0} />

                                   
                               )
                           })}
                       </div> 
                   )
               })}
              </Form>
             
            </div>
        )
    }
}

export default Filters