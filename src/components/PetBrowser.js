import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

    // PetBrowser is JUST passing onAdoptPet has a reference to the function to Pet Component
    // no agrument needed here, the arguement will be found in Pet component & sent back
    
  render() {
    // console.log('PetBrowser/render', this.props.pets)
    return (
      <div className="ui cards">
        {
          this.props.pets.map(eachPet => {
           return <Pet pet={eachPet} key={eachPet.id} onAdoptPet={this.props.onAdoptPet} />
          })
        }
      </div>
    )
  }
}

export default PetBrowser
