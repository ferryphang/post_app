import React, { Component, PropTypes } from 'react';
import { fetchPost, deletePost } from '../actions/index';
import { connect } from 'react-redux';
import {
  Link
} from 'react-router';

class PostShow extends Component {
  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
    console.log(this.props);
  }
  static contextTypes = {
    router: PropTypes.object
  };

  onDeleteClick(props){
    this.props.deletePost(this.props.params.id).then(() => {
      this.context.router.push('/');
    })
  }
  render() {
    const { post } = this.props;

    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <button onClick={this.onDeleteClick.bind(this)}className="btn btn-danger pull-xs-right">DeletePost</button>

      </div>
    );
  }
}


function mapStateToProps(state){
  return { post: state.posts.post }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);