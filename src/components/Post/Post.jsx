import PostFooter from "../Footer/footer";
import PostCOntent from "../PostContent/PostContent";
import PostHeader from "../PostHeader/PostHeader";
import "./Post.scss";

export default function Post({ post }) {
  return (
    <div className="post">
      <PostHeader
        avatar={post.avatar}
        fullname={post.fullname}
        title={post.title}
      />
      <PostCOntent caption={post.caption} img={post.img} />
      <PostFooter />
    </div>
  );
}
