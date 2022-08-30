import type { NextPage } from "next";
import Table from "../components/Table";

const LandingPage: NextPage = () => {
  return (
    <div className='ml-5'>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <tbody>
            <tr>
              <td><a href='/galleries'>Galleries A - Z</a></td>
            </tr>
            <tr>
              <td><a href='/about'>About taipei gallery map</a></td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LandingPage