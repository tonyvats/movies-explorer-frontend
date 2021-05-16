import "./LoadMore.css";

function LoadMore(props) {
  return (
    <div className="more">
      <button className="more__button" onClick={props.onLoadMoreClick}>Ещё</button>
    </div>
  );
}

export default LoadMore;
