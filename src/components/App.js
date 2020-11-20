import React from 'react';
import {increment, fetchPosts} from '../actions'
import { connect } from 'react-redux'

const App = ({count, posts, increment, fetchPosts}) => {
return <>
<h1>Counter {count}</h1>
<button onClick={increment}>+</button>

<button onClick={fetchPosts}>Fetch Posts</button>
<h1>Posts </h1>
{ posts === undefined ? null : posts.map((post) => <h1>{post.title}</h1>)}
</>
}

const mapStateToProps = (state) => {
  return { count: state.count,
  posts: state.posts.data}
  
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);