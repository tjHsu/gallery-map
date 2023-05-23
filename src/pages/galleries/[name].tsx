import { GALLERIES } from '../../constants/Constants'
import React from 'react';
import ErrorPage from 'next/error'
import Link from 'next/link'
import { GetStaticProps } from 'next'

type Exhibition = {
  artist: string
  showName: string
  date: string
  openingDate: string
}

type Location = {
  locationName: string
  address: string
  gMapLink: string
  openingHours: string
}

type GalleryDetail = {
  gallery: {
    name: string
    website: string
    isSeparator: boolean
    exhibitions: Exhibition[]
    locations: Location[]
  }
};

const Gallery: React.FC<GalleryDetail> = ({ gallery }) => {

  if (!gallery) {
    return (
      <ErrorPage statusCode={404} />
    )
  } else {
    const exhibitions = gallery.exhibitions.filter(exhibition => {
      const dateAfterClosing = new Date(exhibition.date.substring(exhibition.date.length - 10).replaceAll('.','-')) // if buggy, .replace(/\./g,'-')
      dateAfterClosing.setDate(dateAfterClosing.getDate() + 1);
      const now = new Date()
      return now < dateAfterClosing
    })

    const locations = gallery.locations
    return (
      <div className="ml-5">
        <div className="overflow-x-auto pb-14">
          <p className="text-lg ml-2">{gallery.name}</p>
          <table className="table table-compact w-full">
            <tbody>
              <tr>
                <td className='text-base'>{exhibitions.length > 1 ? 'Exhibitions' : 'Exhibition'}</td>
              </tr>
              {exhibitions?.map((exhibition: Exhibition) =>
                <ExhibitionItem key={exhibition.showName} artist={exhibition.artist} showName={exhibition.showName} date={exhibition.date} openingDate={exhibition.openingDate} />
              )}
              <tr>
                <td className='text-base'>{locations.length > 1 ? 'Locations' : 'Location'}</td>
              </tr>
              {locations?.map((location: Location) =>
                <LocationItem key={location.locationName} locationName={location.locationName} address={location.address} gMapLink={location.gMapLink} openingHours={location.openingHours} />
              )}
              <tr>
                <td>website</td>
                <td>
                  <a href={`${gallery.website}`} target="_blank" rel="noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21 3L15 3M21 3L12 12M21 3V9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /> <path d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Link href={`/galleries`}>
                    &#8592; Galleries A - Z
                  </Link>
                </td>
                <td>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="ml-10">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.1625478230744!2d121.57627657558199!3d25.062479237143748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab4ef4986425%3A0xe6a1c88273288bb5!2zMzMz55Wr5buKIDMzMyBHQUxMRVJZICjlhafmuZYp!5e0!3m2!1sde!2sde!4v1684853604329!5m2!1sde!2sde" width="300" height="300" loading="lazy"></iframe>
          
        </div>
        </div>
      </div >
    )
  }
}

const ExhibitionItem = ({
  showName,
  artist,
  date,
  openingDate
}: Exhibition) => {
  const opening = openingDate.length !== 0 ? 'Opening ' + openingDate : ''
  return (
    <tr>
      <td className="break-word whitespace-normal">{artist} <br /> {showName}</td>
      <td className="break-word whitespace-normal align-top">{date} <br />  {opening}</td>
    </tr>
  )
};

const LocationItem = ({
  locationName,
  address,
  gMapLink,
  openingHours
}: Location) => {
  return (
    <tr>
      <td className="break-word whitespace-normal align-top">{locationName}</td>
      <td className="break-word whitespace-normal">{address} <br /> {openingHours} <br /> <a href={`${gMapLink}`} target='_blank' rel="noreferrer">Open in map &#10132; </a></td>
    </tr>
  )
};

export async function getStaticPaths() {
  const galleriesHasUrl = GALLERIES.filter(gallery => gallery.urlName.length)
  const galleriesUrlName = galleriesHasUrl.map(gallery => {
    if (gallery.urlName) {
      return { params: { name: gallery.urlName } }
    } else {
      return null
    }
  })
  return {
    paths: galleriesUrlName,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const galleryUrlName = context?.params?.name
  const galleryIndex = GALLERIES.findIndex(gallery => gallery.urlName === galleryUrlName)
  const gallery = GALLERIES[galleryIndex]
  return { props: { gallery } }
}

export default Gallery