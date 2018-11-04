import React from 'react'
import axios from 'axios'
import BlogPost from '../Components/BlogPost'
import NewPost from '../Components/NewPost'

class Index extends React.Component {
  state = {
    blogs: []
  }

  componentDidMount () {
    axios.get('/api/blogs')
    .then(({ data: blogs }) => {
      this.setState({ blogs })
    })
    .catch(error => {
      console.error(error)
    })
  }

  createPost (post) {
    this.setState({
      blogs: [
        post,
        ...this.state.blogs,
      ]
    })
  }

  render () {
    const { blogs } = this.state
    const { isAuthenticated } = this.props.auth

    return (
      <div className="mt-8 px-6">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row justify-center mx-auto">
        {isAuthenticated() &&
          <div className="w-full lg:w-2/5 px-4">
            <NewPost onCreatePost={this.createPost.bind(this)} />
          </div>}

          <div className="w-full lg:w-3/5 xl:w-3/4 px-4">
            {blogs.length > 0
              ? blogs.map(post => <BlogPost key={post.id} post={post} />)
              : (
                <div className="h-full w-full flex justify-center text-grey font-bold">
                  No blog posts were found.
                </div>
              )}
          </div>
        </div>
      </div>
    )
  }
}

export default Index