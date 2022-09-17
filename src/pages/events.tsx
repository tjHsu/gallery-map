import type { NextPage } from "next";
import EventsTable from "../components/EventsTable";

const Events: NextPage = () => {
  return (
    <div className="ml-5">
        <EventsTable/>
    </div>
  )
}

export default Events