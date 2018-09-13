import React from 'react'
import { css } from 'glamor'

const NewsItem = ({ item }) => {
  const newsItem = css({
    padding: '20px',
    boxSizing: 'border-box',
    borderBottom: '1px solid grey',
    ':hover': {
      color: 'red'
    },
    '@media(max-width: 500px)': {
      color: 'blue'
    }
  })

  const greyStyle = css({
    background: 'lightgrey'
  })
  return (
    <div className={`${newsItem} ${greyStyle}`}>
      <h3>{item.title}</h3>
      <div>{item.feed}</div>
    </div>
  )
}

export default NewsItem
