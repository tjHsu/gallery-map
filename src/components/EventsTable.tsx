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
  date: string
}

interface GalleryExhibition extends Exhibition {
  urlName: string
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
  const currentExhibitions = exhibitions.filter(exhibition => {
    const dateAfterClosing = new Date(exhibition.date.substring(exhibition.date.length - 10).replaceAll('.', '-'))
    dateAfterClosing.setDate(dateAfterClosing.getDate() + 1);
    const now = new Date()
    return now < dateAfterClosing
  })

  if (!currentExhibitions.length) {
    return null
  } else {
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
        {currentExhibitions.map((exhibition: Exhibition) =>
          <ExhibitionItem key={exhibition.showName} date={exhibition.date} showName={exhibition.showName} urlName={urlName} />
        )}
      </React.Fragment>
    );
  }
};

const ExhibitionItem = ({
  showName,
  urlName,
  date
}: GalleryExhibition) => {
  return (
    <tr>
      <td>
        <Link href={`/galleries/${urlName}`}>
          {date}
        </Link>
      </td>
      <td className="break-word whitespace-normal">
        <Link href={`/galleries/${urlName}`}>
          {showName}
        </Link>
      </td>
    </tr>
  )
}
export default EventsTable