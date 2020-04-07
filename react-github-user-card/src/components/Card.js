import React from 'react'
import Followers from './Followers'
import './Card.css'

export default class Card extends React.Component {
  render() {
    return (
      <>
        <div className="card-div">
          {this.props.user.avatar_url ? <img src={this.props.user.avatar_url} alt="user avatar" /> : ''}
          <div className="user-info">
            <h1>{this.props.user.name}</h1>
            <h2>{this.props.user.login}</h2>
            <p>{this.props.user.location}</p>
            <p>{this.props.user.followers ? `Followers: ${this.props.user.followers}` : ''}</p>
            <p>{this.props.user.following ? `Following: ${this.props.user.following}` : ''}</p>
          </div>
        </div>
        {this.props.user.length === 0
        ? ''
        : <Followers setFollowers={this.props.setFollowers} followers={this.props.followers} username={this.props.username} />
        }
        
      </>
    )
  }
}