import type { NextPage } from "next"
import Link from 'next/link'

const LandingPage: NextPage = () => {
  return (
    <div className='ml-5'>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <tbody>
            <tr>
              <td className="text-base"><Link href='/events'><a>What&apos;s on</a></Link></td>
            </tr>
            <tr>
              <td className="text-base"><Link href='/galleries'><a>Galleries A - Z</a></Link></td>
            </tr>
            <tr>
              <td className="text-base"><Link href='/map'><a>Map</a></Link></td>
            </tr>
            <tr>
              <td className="text-base"><Link href='/about'><a>About taipei gallery map</a></Link></td>
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