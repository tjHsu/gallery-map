import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className="ml-5">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <tbody>
            <tr>
              <td className="text-base">About tpgmap</td>
              <td></td>
            </tr>
            <tr>
              <td className="text-base">Information</td>
              <td className="break-word whitespace-normal text-base">Your ultimate pocket guide to art galleries in Taipei.</td>
            </tr>
            <tr>
              <td className="text-base align-top">Social networks</td>
              <td className="text-base">
                <a href='https://twitter.com/tpegallerymap' target="_blank" rel="noreferrer">Twitter</a><br />
                <a href='https://www.instagram.com/taipeigallerymap/' target="_blank" rel="noreferrer">Instagram</a>
              </td>
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

export default About