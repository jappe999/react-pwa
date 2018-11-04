import React from 'react'

export default class BlogPost extends React.Component {
  formatDate (date) {
    const time = new Date(date || Date.now())
    return `${this.day(time)}-${this.month(time)}-${time.getFullYear()} ${this.hours(time)}:${this.minutes(time)}:${this.seconds(time)}`
  }

  hours = time => {
    let hrs = time.getHours()
    return (`0${hrs}`).substr(-2)
  }

  minutes = time => {
    let min = time.getMinutes()
    return (`0${min}`).substr(-2)
  }

  seconds = time => {
    let sec = time.getSeconds()
    return (`0${sec}`).substr(-2)
  }

  day = time => {
    let min = time.getDate()
    return (`0${min}`).substr(-2)
  }

  month = time => {
    let sec = time.getMonth() + 1
    return (`0${sec}`).substr(-2)
  }

  render () {
    const { post } = this.props

    return (
      <div className="w-full mb-4 overflow-hidden bg-white shadow rounded">
        <div className="p-4">
          <h3 className="mb-1 sans-serif text-blue">
            { post.title }
          </h3>
          <h5 className="mb-1 sans-serif text-grey-darker">
            { this.formatDate(post.date) }
          </h5>
          <p className="text-grey-darkest text-sm sans-serif">
            { post.text }
          </p>
        </div>
      </div>
    )
  }
}