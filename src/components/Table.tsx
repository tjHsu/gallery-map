import React from 'react'
import { GALLERIES } from '../constants/Constants'

type TableItem = {
  name: string
  website: string
};

const Table: React.FC = () => {
  return (
    <div className="overflow-x-auto mb-5">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Gallery Name</th>
            <th></th>
          </tr>
        </thead>
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
      <td>{name}</td>
      <td className='text-right'><a href={website} target="_blank" rel="noreferrer">&#187;</a></td>
    </tr>
  );
};

export default Table