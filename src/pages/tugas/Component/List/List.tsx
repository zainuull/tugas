import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from '@tremor/react';
import { useEffect, useState } from 'react';
import { getData } from '../../Services/api';

const List = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getData().then((data) => setDatas(data));
  }, []);

  return (
    <Card className="px-12">
      <Table className="shadow-xl mt-5 rounded-xl">
        <TableHead className="bg-black">
          <TableRow>
            <TableHeaderCell className="text-white font-bold py-2">Nama Penumpang</TableHeaderCell>
            <TableHeaderCell className="text-white font-bold py-2">Alamat</TableHeaderCell>
            <TableHeaderCell className="text-white font-bold py-2">Kota Tujuan</TableHeaderCell>
            <TableHeaderCell className="text-white font-bold py-2">Harga</TableHeaderCell>
            <TableHeaderCell className="text-white font-bold py-2">Diskon</TableHeaderCell>
            <TableHeaderCell className="text-white font-bold py-2">Total Harga</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data: any) => (
            <TableRow key={data?._id}>
              <TableCell>{data?.name}</TableCell>
              <TableCell>{data?.address}</TableCell>
              <TableCell>{data?.destination_city}</TableCell>
              <TableCell>
                {data.price &&
                  `${data.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}`}
              </TableCell>
              <TableCell>
                {' '}
                {data.discount &&
                  `${data.discount.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}`}
              </TableCell>
              <TableCell>
                {data.total_price &&
                  `${data.total_price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default List;
