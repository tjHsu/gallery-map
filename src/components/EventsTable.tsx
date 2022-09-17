import React from 'react'
import { GALLERIES } from '../constants/Constants'
import Link from 'next/link'

type TableItem = {
  englishName: string
  isSeparator: boolean
  urlName: string
  exhibitions: Exhibition[]
};

type Exhibition = {
  showName: string
}

const galleriesWithEvents = GALLERIES.filter((gallery: TableItem) => {
  return gallery.exhibitions.length && !gallery.isSeparator
})

const EventsTable: React.FC = () => {
  return (
    <div className="overflow-x-auto pb-14">
      <table className="table table-compact w-full">
        <tbody>
          {galleriesWithEvents.map((gallery: TableItem) =>
            <TableItem key={gallery.englishName} englishName={gallery.englishName} urlName={gallery.urlName} isSeparator={gallery.isSeparator} exhibitions={gallery.exhibitions} />
          )}
        </tbody>
      </table>
    </div>
  )
}

const TableItem = ({
  englishName,
  urlName,
  exhibitions
}: TableItem) => {
  return (
    <React.Fragment>
      <tr>
        <td>
        <Link href={`/galleries/${urlName}`}>
          {englishName}
          </Link>
        </td>
        <td></td>
      </tr>
      {exhibitions.map((exhibition:Exhibition) =>
        <ExhibitionItem key={exhibition.showName} showName={exhibition.showName}/>
      )}
    </React.Fragment>
  );
};

const ExhibitionItem = ({
  showName
}: Exhibition) => {
  return (
    <tr>
      <td></td>
      <td className="break-word whitespace-normal">
        {showName}
      </td>
    </tr>
  )
}
export default EventsTable