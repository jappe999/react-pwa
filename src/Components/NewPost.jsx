import React from 'react'
import axios from 'axios'

export default class BlogPost extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      post: {}
    }

    this.createBlogPost = this.createBlogPost.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  createBlogPost (event) {
    event.preventDefault()
    axios.post('/api/blogs', {
      ...this.state.post
    })
  }

  handleInput (event) {
    const { id, value } = event.target
    this.setState({
      post: {
        ...this.state.post,
        [id]: value,
      }
    })
  }

  render () {
    return (
      <div className="w-full mb-4 overflow-hidden bg-white shadow rounded">
        <div className="p-4">
          <form action="/api/blogs" method="post" onSubmit={this.createBlogPost}>
            <h2 className="mb-4 text-grey-darkest">Nieuw bericht</h2>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full shadow mb-3 p-3 bg-grey-lightest"
              placeholder="Titel"
              required
              onChange={this.handleInput}
            />
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              className="w-full shadow mb-3 p-3 bg-grey-lightest"
              placeholder="Subtitel"
              required
              onChange={this.handleInput}
            />
            <textarea
              name="text"
              id="text"
              className="w-full shadow mb-3 p-3 bg-grey-lightest"
              placeholder="Bericht"
              rows="10"
              required
              onChange={this.handleInput}
            >
            </textarea>

            <div className="flex justify-end">
              <button
                type="submit"
                className="py-3 px-4 bg-blue text-white rounded"
                onSubmit={this.createBlogPost}
              >
                Aanmaken
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}