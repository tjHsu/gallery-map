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
                <td className="text-base align-top">Contact us</td>
                <td>
                  <a href='https://form.typeform.com/to/yovdmQxU' target="_blank" rel="noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21 3L15 3M21 3L12 12M21 3V9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /> <path d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </a>
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