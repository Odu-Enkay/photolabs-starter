import "../styles/TopicListItem.scss";
import TopicList from "./TopicList";
import topics from "../mocks/topics";


/* const sampleDataForTopicListItem = {
  id: 1,
  slug: "topic-1",
  label: "Nature",
}; */

const TopicListItem = (props) => {
  const { title } = props.topic; // Correctly destructuring 'title'

  return (
    <div className="topic-list__item">
      <span className="top-nav-bar__topic-list-item">
        {title}
      </span>
    </div>
  );
};

export default TopicListItem;
