import React from 'react'
// import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'

export default class Content extends React.Component  {
  render () {
    return (
      <div>
        <p>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}
