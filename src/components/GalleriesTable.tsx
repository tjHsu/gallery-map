import React from 'react'
import { GALLERIES } from '../constants/Constants'
import Link from 'next/link'

type TableItem = {
  name: string
  isSeparator: boolean
  urlName: string
};

const GalleriesTable: React.FC = () => {
  return (
    <div className="overflow-x-auto pb-14">
      <table className="table table-compact w-full">
        <tbody>
          {GALLERIES.map((gallery: TableItem) =>
            <TableItem key={gallery.name} name={gallery.name} urlName={gallery.urlName} isSeparator={gallery.isSeparator} />
          )}
        </tbody>
      </table>
    </div>
  )
}

const TableItem = ({
  name,
  isSeparator,
  urlName
}: TableItem) => {
  if (isSeparator) {
    return (
      <tr className='h-16'>
        <td className='text-base'>{name}</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td className='text-base'><Link href={`/galleries/${urlName}`}>{name}</Link></td>
      </tr>
    );
  }
};

export default GalleriesTable