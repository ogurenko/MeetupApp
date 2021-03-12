import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const history = useHistory();
  // send dat from child to parent
  const handleAddMeetup = (meetupData) => {
    const newMeetups = async () => {
      const response = await fetch(
        "https://react-meetup-93eee-default-rtdb.firebaseio.com/meetups.json",
        {
          method: "POST",
          body: JSON.stringify(meetupData),
          headers: {
            "Content-Type": "application/json"
          }
        }
      ).then(() => history.replace("/"));

      if (!response.ok) {
        const message = `An error has occured ${response.status}`;
        throw new Error(message);
      }
    };
    newMeetups().catch((err) => err.message);
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddItem={handleAddMeetup} />
    </section>
  );
};

export default NewMeetupPage;
