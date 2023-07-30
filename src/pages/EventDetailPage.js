import React from "react";
import { useParams } from "react-router-dom";
function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <div>EventDetailPage</div>
      <h1>{params.eventId}</h1>
    </>
  );
}

export default EventDetailPage;
