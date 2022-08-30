import type { GetServerSideProps } from "next";
import { GALLERIES } from '../../constants/Constants'
import React from 'react';

type Exhibition = {
  artist: string
  showName: string
  date: string
  openingDate: string
}

type Location = {
  locationName: string
  address: string
  openingHours: string
}

type GalleryDetail = {
  name: string
  website: string
  isSeparator: boolean
  exhibitions: Exhibition[]
  locations: Location[]
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const galleryIndex = GALLERIES.findIndex(gallery => gallery.name === params?.name)
  const gallery = GALLERIES[galleryIndex]
  return {
    props: { ...gallery }
  };
};

const Gallery: React.FC<GalleryDetail> = (props) => {
  console.log('DEBUGG here')
  console.log(props)
  const exhibitions = props.exhibitions
  const locations = props.locations
  return (
    <div className="ml-5">
      <div className="overflow-x-auto">
        <p className="text-lg ml-2">{props.name}</p>
        <table className="table table-compact w-full">
          <tbody>
            <tr>
              <td className='text-base'>Exhibitions</td>
              <td className='text-base'>{exhibitions.length!! ? '':'N/A' }</td>
            </tr>
            {exhibitions?.map((exhibition: Exhibition) =>
              <ExhibitionItem key={exhibition.showName} artist={exhibition.artist} showName={exhibition.showName} date={exhibition.date} openingDate={exhibition.openingDate} />
            )}
            <tr>
              <td className='text-base'>{locations.length > 1 ? 'Locations': 'Location'}</td>
            </tr>
            {locations?.map((location: Location) =>
              <LocationItem key={location.locationName} locationName={location.locationName} address={location.address} openingHours={location.openingHours} />
            )}
            <tr>
              <td>website</td>
              <td>
                <a href={`${props.website}`} target="_blank" rel="noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21 3L15 3M21 3L12 12M21 3V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /> <path d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11" stroke="currentColor" stroke-linecap="round" />
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

const ExhibitionItem = ({
  showName,
  artist,
  date,
  openingDate
}: Exhibition) => {
  return (
    <tr>
      <td>{artist} <br /> {showName}</td>
      <td className="break-word whitespace-normal">{date} <br /> Opening {openingDate}</td>
    </tr>
  )
};

const LocationItem = ({
  locationName,
  address,
  openingHours
}: Location) => {
  return (
      <tr>
        <td className="break-word whitespace-normal">{locationName}</td>
        <td className="break-word whitespace-normal">{address} <br/> {openingHours}</td>
      </tr>
  )
};

export default Gallery