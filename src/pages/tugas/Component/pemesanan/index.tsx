import Link from 'next/link';
import PemesananForm from './PemesananForm';
import Submit from '../Submit/Submit';

const Pemesanan = () => {
  return (
    <div className="flex flex-col px-6 bg-white pt-6 pb-12 shadow-md">
      <Link href={'/tugas'}>
        <h1 className="text-2xl font-semibold">Pemesanan</h1>
      </Link>
      <p className="text-gray-400">Harap diisi dengan data yang sesuai</p>
      <PemesananForm />
      <Submit />
    </div>
  );
};

export default Pemesanan;
