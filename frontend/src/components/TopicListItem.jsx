import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title } = props.topic;

  return (
    <div className="topic-list__item" onClick={props.onClick}>
      <span className="top-nav-bar__topic-list-item">
        {title}
      </span>
    </div>
  );
};

export default TopicListItem;
