import type { NextPage } from "next"
import Link from 'next/link'
import Smartlook from 'smartlook-client'
import mixpanel from 'mixpanel-browser'
import { useEffect } from "react"

const LandingPage: NextPage = () => {
  useEffect(() => {
    // Client-side-only code
    Smartlook.init('bcd622dee28566231097b08a614f2ac2a4c1de02')
})
mixpanel.init('3964f725cfe2946b193963b4f3d4938c', {debug: true, ignore_dnt: true}); 
mixpanel.track('Landing Page');
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