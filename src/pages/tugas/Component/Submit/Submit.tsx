import { RiRestartLine } from 'react-icons/ri';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { useForm } from '@/pages/tugas/store/store.form';
import { createData } from '@/pages/tugas/Services/api';

const Submit = () => {
  const [form] = useForm();
  const { push } = useRouter();

  //to save the value according to the value in the form and send it to the backend
  const handleSave = async () => {
    const id = new Date().getTime();
    const totalPrice = form?.price * form?.total_buy;
    const discount = totalPrice * form?.discount;

    const obj = {
      _id: String(id),
      name: form?.name,
      address: form?.address,
      destination_city: form?.destination_city,
      price: form?.price,
      total_buy: form?.total_buy,
      discount: discount,
      total_price: totalPrice - discount,
    };
    await createData(obj).then((res) => push('/'));
  };

  return (
    <div className="flex flex-col px-6 bg-white pt-6 pb-6 shadow-md gap-y-4 mt-6">
      <div className="w-full flex gap-x-4 justify-end">
        <div className="flex items-center justify-center gap-x-2 bg-gray-200 rounded-md w-1/3 h-12 hover:shadow-xl transition-all cursor-pointer ">
          <RiRestartLine />
          <button>Reset</button>
        </div>
        <div
          onClick={handleSave}
          className="flex items-center justify-center gap-x-2 bg-gray-900 rounded-md w-1/3 h-12 hover:shadow-xl transition-all cursor-pointer text-white">
          <AiOutlineCheckCircle size={20} />
          <button>Simpan</button>
        </div>
      </div>
    </div>
  );
};

export default Submit;
