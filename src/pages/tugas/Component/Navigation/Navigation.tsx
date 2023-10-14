import { CiSearch } from 'react-icons/ci';
import { FcDataSheet } from 'react-icons/fc';
import { AiOutlineFilter } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';
import { SlRefresh } from 'react-icons/sl';
import Link from 'next/link';
import { useForm } from '../../store/store.form';

const Navigation = () => {
  const [, setReset] = useForm();

  //to reset form
  const handleReset = () => {
    setReset({
      _id: '',
      name: '',
      address: '',
      destination_city: '',
      price: 0,
      total_buy: 0,
      discount: 0,
      total_price: 0,
    });
  };

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="w-full flex items-center justify-between p-4 bg-gray-200 text-sm">
        <div className="w-1/3 flex items-center gap-x-4">
          <Link
            onClick={handleReset}
            href={'/tugas/Component/pemesanan'}
            className="bg-black text-white rounded-md p-3 flex justify-center items-center gap-x-2 w-full">
            <IoAddCircleOutline size={20} />
            <h1>Pesan Tiket</h1>
          </Link>
        </div>
        <div className="w-1/3 flex items-center gap-x-2">
          <div className="w-full flex gap-x-2 border rounded-lg items-center px-2 h-12 hover:outline hover:outline-1 hover:outline-black bg-white">
            <CiSearch size={30} className="text-gray-400" />
            <input placeholder="Cari data" className="outline-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
