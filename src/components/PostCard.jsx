const PostCard = ({ post }) => {
    return (
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    );
  };
  
  export default PostCard;
  