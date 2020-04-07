import React from 'react'
import axios from 'axios'
import './Followers.css'

export default class Followers extends React.Component {
  constructor(){
    super()
    this.state = {
      userFollowers: []
    }
  }

  componentDidMount = () => {
    axios.get(`https://api.github.com/users/${this.props.username}/followers`)
      .then(res => {
        this.setState({ userFollowers: res.data })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <>
        {this.state.userFollowers.map(follower => {
          return <div className="followers-list">
            <img src={follower.avatar_url} alt="follower avatar" />
            <h1 key={follower.id}>{follower.login}</h1>
          </div>
        })}
      </>
    )
  }
}