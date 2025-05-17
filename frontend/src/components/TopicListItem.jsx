import "../styles/TopicListItem.scss";
import TopicList from "./TopicList";

const sampleDataForTopicListItem = {
  id: 1,
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  const {title} = props.topic;
  console.log(props.topic);

  return (
    
    <div className="topic-list__item">
      {/* Insert React */}
      <span className="top-nav-bar__topic-list

"> 
        {title}</span>
    </div>
  );
};

export default TopicListItem;
