import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    fetch("https://react-meetup-93eee-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meet = {
            id: key,
            ...data[key]
          };

          meetups.push(meet);
        }

        setLoading(false);
        setMeetup(meetups);
      });
  }, []);

  // console.log(meetup);

  return (
    <>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <section>
          <h1>All Meetups</h1>
          <MeetupList meetups={meetup} />
        </section>
      )}
    </>
  );
};

export default AllMeetupsPage;
