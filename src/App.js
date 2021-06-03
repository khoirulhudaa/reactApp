import React from'react';
import axios from 'axios';
import Dashboard from './pages/Dashboard';

class App extends React.Component  {
     
  state = {
    keranjang : [],
    menu : []
}

componentDidMount() {
  this.getData()
}

getData() {
  axios.get('localhost:4001/data').then(res => {
    res.json()
  })
  .then(json => this.setState({
    menu: json.data
  }))
  .catch(err => {
    return err
  })
}

  render() {
    return (
      <div>
          <Dashboard />
      </div>
    )
  }
}


export default App;