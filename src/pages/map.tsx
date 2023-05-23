

import type { NextPage } from "next";
import Link from 'next/link'

const Galleries: NextPage = () => {
    return (
        <div className="mx-5 mb-20">
            <iframe className="w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[5/2] lg:aspect-[3/1]" src="https://www.google.com/maps/d/embed?mid=1lv1vWZ8_q0BL0DjJKn2Vj9Hh1gXbIbo&ehbc=2E312F"></iframe>
            <div className="text-right">
                <Link href={`/events`}>
                    What&apos;s on &#8594;
                </Link>
            </div>
            <div className="text-right">
                <Link href={`/galleries`}>
                    Galleries A - Z &#8594;
                </Link>
            </div>
        </div>
    )
}

export default Galleries