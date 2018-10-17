import React from 'react'
import axios from 'axios'

class Index extends React.Component {
  state = {
    blogs: []
  }

  componentDidMount () {
    axios.get('/blogs')
    .then(({ data: blogs }) => {
      console.log(blogs);
      
      this.setState({ blogs })
    })
    .catch(error => {
      console.error(error)
    })
  }

  render () {
    const { blogs } = this.state

    return (
      <div className="mt-8 px-6">
        {
          blogs.length > 0
            ? blogs.map(user => 
              <div key={user.id}>{user.username}</div>
            )
            : (
              <div className="h-full w-full flex justify-center text-grey font-bold">
                No blog posts were found.
              </div>
            )
        }
      </div>
    )
  }
}

export default Index