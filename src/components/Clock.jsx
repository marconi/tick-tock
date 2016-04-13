import React from 'react'
import classNames from 'classnames'
import moment from 'moment'
import '../styles/clock.css'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      localTime: this._getLocalTime()
    }

    setInterval(() => {
      this.setState({localTime: this._getLocalTime()})
    }, 1000)
  }

  render() {
    const isAm = this.state.localTime.format('a') === 'am'
    const classes = classNames({
      am: isAm,
      pm: !isAm
    })
    return (
      <div className={classes}>
        {this.props.name} - {this._formatLocalTime()}
      </div>
    )
  }

  _getLocalTime() {
    let utcoffset = parseFloat(this.props.timezone) + parseFloat(this.props.utcoffset)
    if (utcoffset > 12) {
      utcoffset = -12 + (utcoffset - 12)
    } else if (utcoffset < -12) {
      utcoffset = 12 - Math.abs(utcoffset + 12)
    }
    return moment.utc().utcOffset(utcoffset)
  }

  _formatLocalTime() {
    return this.state.localTime.format('hh:mm:ss a')
  }
}
