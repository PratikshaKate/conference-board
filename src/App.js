// Challenge / Exercise

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewEventPage from "./pages/NewEventPage";
import EventsPage from "./pages/EventsPage";
import EditEventPage from "./pages/EditEventPage";
import EventDetailPage from "./pages/EventDetailPage";
import Root from "./components/Root";
import EventsNavigation from "./components/EventsNavigation";
import { loader as eventsLoader } from "./pages/EventsPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <EventsNavigation />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            element: <EventDetailPage />,
          },
          {
            path: "new",
            element: <NewEventPage />,
          },
          {
            path: ":eventId/edit",
            element: <EditEventPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
