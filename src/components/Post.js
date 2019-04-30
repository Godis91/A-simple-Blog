import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../action/postActions";

const Post = props => {
  const { post } = props;

  const handleClick = () => {
    props.deletePost(props.post.id);
    props.history.push("/");
  };

  const ourPost = post ? (
    <div>
      <h4 className="center">{post.title}</h4>
      <p>{post.body}</p>
      <div className="center">
        <button className="btn grey" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  ) : (
    <div className="center">Loading...</div>
  );

  return <div className="container">{ourPost}</div>;
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;

  return {
    post: state.posts.find(post => post.id === id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => dispatch(deletePost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
