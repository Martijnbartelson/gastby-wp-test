import React from "react"
import { Router } from "@reach/router"
import Dog from "../../components/Dog"


const App = () => (
 
    <Router>
      <Dog path="/app/dog" />
    </Router>

)

export default App