import Post from "../Post/Post";
import "./list.scss";

export default function List({ data = [] }) {
  return (
    <div className="list">
      {data.map((i) => (
        <Post post={i} />
      ))}
    </div>
  );
}
