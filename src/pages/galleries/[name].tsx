import type { NextPage, GetServerSideProps } from "next";
import { GALLERIES } from '../../constants/Constants'
import React from 'react';

type GalleryDetail = {
  name: string
  website: string
  isSeparator: boolean
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const galleryIndex = GALLERIES.findIndex(gallery => gallery.name === params?.name)
  const gallery = GALLERIES[galleryIndex]
  // console.log('DEBUGG')
  // console.log(GALLERIES[galleryIndex])
  return {
    props: { ...gallery }
  };
};

const Gallery: React.FC<GalleryDetail> = (props) => {
  console.log('DEBUGG here')
  console.log(props)
  return (
    <div className="ml-5">
      <div className="overflow-x-auto">
        <p className="text-lg ml-2">{props.name}</p>
        <table className="table table-compact w-full">
          <tbody>
            <tr>
              <td className='text-base'>Exhibitions</td>
            </tr>
            <tr>
              <td>Juan Zamora <br /> The Broken Seas</td>
              <td className="break-word whitespace-normal">2022.09.13-2022.10.29 <br /> Opening 2022.09.17 (Sat.) 15:00</td>
            </tr>
            <tr>
              <td>Su Hui-Yu <br /> 1972, Toffler</td>
              <td className="break-word whitespace-normal">2022.09.13-2022.10.29 <br /> Opening 2022.09.17 (Sat.) 15:00</td>
            </tr>
            <tr>
              <td className='text-base'>Info</td>
            </tr>
            <tr>
              <td>address</td>
              <td className="break-word whitespace-normal">No.28, Lane 770, Beian Road, Zhongshan District, Taipei 104, Taiwan</td>
            </tr>
            <tr>
              <td>opening hours</td>
              <td>tue-sat 11:00-18:00</td>
            </tr>
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

export default Gallery