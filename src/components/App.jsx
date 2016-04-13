import React from 'react'
import moment from 'moment'
import classNames from 'classnames'
import Clock from './Clock.jsx'
import '../styles/app.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      utcoffset: 0
    }
  }

  handleRange() {
    this.setState({utcoffset: this.refs.utcoffset.value})
  }

  render() {
    return (
      <div className={classNames({app: true})}>
        <Clock name="UTC" timezone={0} utcoffset={this.state.utcoffset} />
        <Clock name="Philippines" timezone={8} utcoffset={this.state.utcoffset} />
        <Clock name="Atlanta" timezone={-4} utcoffset={this.state.utcoffset} />
        <Clock name="San Diego" timezone={-8} utcoffset={this.state.utcoffset} />
        <input
          ref="utcoffset"
          type="range"
          min="-12"
          max="12"
          step="0.5"
          onInput={this.handleRange.bind(this)}
          onChange={this.handleRange.bind(this)} />
        <div>{this._formatUtcOffset()}</div>
      </div>
    )
  }

  _formatUtcOffset() {
    const minutes = this.state.utcoffset * 60
    let offsetLabel = moment.utc().utcOffset(minutes).format('Z')
    if (offsetLabel == '+00:00') {
      offsetLabel = 'Now'
    }
    return offsetLabel
  }
}
