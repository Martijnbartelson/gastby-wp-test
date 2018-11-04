
import React from "react"


class Dog extends React.Component {
  state = {
    dog: null,
    
  }

  fetchdog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response =>{
      return response.json();
    })
    .then(myJson => {
      this.setState({
        dog: myJson.message
      });
    });
  }

  render() {
 
    return (
        <div>
            <h1>test</h1>
            <button onClick={()=>this.fetchdog()} >get dog</button>
            { this.state.dog && <img src={this.state.dog} alt="Smiley face"></img>}
        </div>
    )
  }
}

export default Dog
