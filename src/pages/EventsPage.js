import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();
  console.log(events);
  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("https://events-apis.onrender.com/events");

  if (!response.ok) throw Error({ message: "Somethigng went wrong!" });
  else {
    const data = await response.json();
    return data.events;
  }
};
