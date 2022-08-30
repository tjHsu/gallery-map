import React from 'react'
import { GALLERIES } from '../constants/Constants'

type TableItem = {
  name: string
  website: string
};

const Table: React.FC = () => {
  return (
    <div className="overflow-x-auto pb-14">
      <table className="table table-compact w-full">
        <tbody>
          {GALLERIES.map((gallery: TableItem) =>
            <TableItem key={gallery.name} name={gallery.name} website={gallery.website} />
          )}
        </tbody>
      </table>
    </div>
  )
}

const TableItem = ({
  name,
  website
}: TableItem) => {
  return (
    <tr>
      <td className='text-base'>{name}</td>
      <td className='text-right text-base'><a href={website} target="_blank" rel="noreferrer">&#187;</a></td>
    </tr>
  );
};

export default Table