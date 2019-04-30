import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Home(props) {
  const { posts } = props;
  //const [posts, setPosts] = useState(props.posts);
  const postList = posts ? (
    posts.map(post => {
      return (
        <div className="card" key={post.id}>
          <div className="card-content">
            <Link to={"/" + post.id}>
              <span className="card-title">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="center red-text">No posts yet</div>
  );

  return (
    <div className="container">
      <h4 className="center">Home</h4>
      {postList}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
