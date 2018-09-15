import React, { Component } from 'react'
import ReactDom from 'react-dom'

import JSON from './db.json'

// Components
import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component {
  state = {
    news: JSON,
    filtered: []
  }

  getKeyword = (event) => {
    // console.log(event.target.value)
    const keyword = event.target.value
    this.setState(previousState => ({
      filtered: previousState.news.filter(item => item.title.indexOf(keyword) > -1)
    }))
  }

  render () {
    const newsFiltered = this.state.filtered
    const newsWhole = this.state.news
    return (
      <div>
        <Header keywords={this.getKeyword} />
        <NewsList news={this.state.filtered.length === 0 ? newsWhole : newsFiltered}>
          <h3>The news are:</h3>
        </NewsList>
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'))
