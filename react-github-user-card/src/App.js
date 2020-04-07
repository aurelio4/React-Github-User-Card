import React from 'react'
import axios from 'axios'
import Card from './components/Card'
import CardForm from './components/CardForm'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      userData: [],
      userFollowers: []
    }
  }

  setFollowers = (id) => {
    this.setState({ userFollowers: [id]})
  }
  
  getUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  fetchUser = () => {
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(async res => {
        const data = await res.data
        this.setState({
          userData: data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <CardForm fetchUser={this.fetchUser} username={this.state.username} getUsername={this.getUsername} />
        <Card username={this.state.username} user={this.state.userData} setFollowers={this.setFollowers} followers={this.state.userFollowers} />
      </>
    )
  }
}