import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import TracksIndexContainer from './TracksIndexContainer'
import TracksTile from './TracksTile'
import UserShow from './UserShow'

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TracksIndexContainer} />
          <Route exact path="/tracks" component={TracksIndexContainer} />
          <Route exact path="/users/:userId" component={UserShow} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
