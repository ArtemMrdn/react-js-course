function Post(props) {
  return <h2 onClick={props.cb}>{props.name}</h2>;
}

export default Post;
