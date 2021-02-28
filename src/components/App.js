import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  // callback function for Pet
  // compare this.state.pets data array to find the id
  // that matches the passed in id
  // and change the state of their adopted status to true
  // which will change the button ternary op in Pet on the re-render
  onAdoptPet = (id) => {
    // console.log('adopted button', id)
   const updatedPets = this.state.pets.map(pet => {
     if (id === pet.id) {
       // spead op here b/c you want to keep all the other k/v pairs
       // just note the changed k/v pair
       // else return the pet
       return {
         ...pet,
         isAdopted: true
        }
      } else {
        return pet
      }
    })
    // then setState for the pets array
   this.setState({
     pets: updatedPets
   })

  }

  // callback function - Filter
    // callback function b/c you are changing something in the parent state
    // from a child component 
    // lifecycle - triggers re-render
  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  // callback function - Filter
  // lifecycle - triggers re-render
  onFindPetsClick = () => {
    
    // determines which pets to pass down as props in PetBrowser
    const { type } = this.state.filters
    const url = type === 'all' ? '/api/pets' : `/api/pets?type=${type}`
    
    // fetches data & setState() w/ data array
    fetch(url)
      .then(resp => resp.json())
      .then(pets => {
        this.setState({
          pets: pets
        })
      })

    // let url
    // if (this.state.filters.type === 'all') {
    //   url = '/api/pets'
    // } else {
    //  url = `/api/pets?type=${this.state.filters.type}`
    // }
  }

  render() {
    console.log('app/render', this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
