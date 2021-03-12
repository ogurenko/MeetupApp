import MeetupItem from "./MeetupItem";

const MeetupList = ({ meetups }) => {
  console.log(meetups);

  return meetups.map((data) => <MeetupItem key={data.id} data={data} />);
};

export default MeetupList;
