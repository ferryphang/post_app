import React, { Component } from 'react';
import {
  createPost
} from '../actions/index';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)} >
        <h3>Create New Form</h3>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">{title.error}</div>
        </div>
        <div className="form-group">
          <label htmlFor="">Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>
        <div className="form-group">
          <label htmlFor="">Content</label>
          <textarea className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary" {...content} >Submit</button>
      </form>
    );
  }
}

// function validate(values) {
//   const errors = {};
//   if(!values.title){
//     errors.title = "Enter a title";
//   }
//   return errors;
// }

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
}, null, { createPost })(PostsNew);
