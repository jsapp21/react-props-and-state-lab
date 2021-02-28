import React from 'react'

class Pet extends React.Component {


  // helper method inside Pet class that calls the callback function onAdoptPet in App
  // passes through the id
  // this is the weakness of React & their state managment tool
  handleAdopt = () => {
    // console.log('handleAdpot/pet', this.props.pet.id)
      this.props.onAdoptPet(this.props.pet.id)
  }

  // send back id onClick - 2 ways
    // 1) write a helper method inside the class w/ the callback

    // 2) assign it to an anonymous function - the in line way to do it
      // ex. onClick={() => this.props.onAdoptPet(id)

  render() {
    // console.log('Pet/render', this.props.pet)
    const { name, type, age, weight, gender, isAdopted } = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <p className="header">
            {gender === 'female' ? '♀' : '♂'}
            {name}
          </p>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          { isAdopted ? 
          <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={this.handleAdopt}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
