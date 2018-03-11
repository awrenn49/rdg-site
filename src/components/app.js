import React from 'react'
import NavigationBar from './contexts/navigation/NavigationBar'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <NavigationBar/>
      </div>
    )
  }
}
