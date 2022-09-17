import type { NextPage } from "next";
import GalleriesTable from "../components/GalleriesTable";

const Galleries: NextPage = () => {
  return (
    <div className="ml-5">
        <GalleriesTable/>
    </div>
  )
}

export default Galleries