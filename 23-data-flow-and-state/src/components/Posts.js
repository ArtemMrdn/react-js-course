import Post from "./Post";

function Posts(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <Post key={post.id} name={post.name} cb={props.cb} />
      ))}
    </div>
  );
}

export default Posts;
