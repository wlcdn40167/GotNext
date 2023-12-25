import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Jade" body="React.js is very nice" />
        <Post author="Jade" body="React.js is very nice" />
      </ul>
    </>
  );
}
export default PostsList;
