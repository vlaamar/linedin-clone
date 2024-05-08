import "../Post/postcontent.scss";

export default function PostCOntent({ caption, img }) {
  return (
    <div className="post-content">
      <p className="post-content__text">{caption}</p>
      <img className="post-content__img" src={img} alt="content"></img>
    </div>
  );
}
