import "../styles/TopicListItem.scss";
import TopicList from "./TopicList";

const sampleDataForTopicListItem = {
  id: 1,
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  const {id, slug, label} = props.topic;
  console.log(props.topic);

  return (
    
    <div className="topic-list__item">
      {/* Insert React */}
      <span topic-list__item> 
        <p>{id} </p>
        <p>{slug}</p> 
        <p>{label}</p></span>
      


    </div>
  );
};

export default TopicListItem;
