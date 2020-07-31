import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import DashboardSearch from './DashboardSearch'
import DashboardShelf from './DashboardShelf'
import BottomMenu from './BottomMenu'
import { Switch, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/search' render={() => (
            <DashboardSearch />
          )} />
          <Route path='/' render={({ history }) => (
            <div>
              <DashboardShelf />
              <BottomMenu />
            </div>
          )} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
