import { useFormik } from 'formik';
import CityDropDown from '../DropDown/CityDropdown';
import { useForm } from '../../store/store.form';
import TotalBuyDropDown from '../DropDown/TotalBuyDropDown';

const PemesananForm = () => {
  const [form, setForm] = useForm();

  //to validation form
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
    },
    onSubmit: () => {},
  });

  //whatever the user types will be set to the form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formik.handleChange(e);
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form>
      <div className="w-full grid grid-cols-12 gap-6 mt-2">
        <div className="flex flex-col gap-y-2 col-span-6">
          <h2 className="font-semibold">Nama Lengkap</h2>
          <input
            id="name"
            className={`${
              formik.errors?.name ? 'outline-2 outline-red-500' : 'hover:outline-black '
            } outline-none border hover:outline hover:outline-2 bg-gray-100 rounded-lg px-2 h-10`}
            onChange={handleChange}
            placeholder="Masukkan Nama Lengkap"
          />
          {formik.errors?.name && <p className="text-red-600">{formik.errors?.name}</p>}
        </div>
        <div className="flex flex-col gap-y-2 col-span-6">
          <h2 className="font-semibold">Alamat</h2>
          <textarea
            id="address"
            className={`${
              formik.errors?.address ? 'outline-2 outline-red-500' : 'hover:outline-black '
            } outline-none border hover:outline hover:outline-2 bg-gray-100 rounded-lg px-2 h-20`}
            onChange={handleChange}
            placeholder="Masukkan Alamat anda"
            cols={30}
          />
          {formik.errors?.address && <p className="text-red-600">{formik.errors?.address}</p>}
        </div>
      </div>
      <div className="w-full grid grid-cols-12 gap-6 mt-2">
        <div className="flex flex-col gap-y-2 col-span-6">
          <h2 className="font-semibold">Kota Tujuan</h2>
          <CityDropDown />
        </div>
        <div className="flex flex-col gap-y-2 col-span-6">
          <h2 className="font-semibold">Jumlah Beli</h2>
          <TotalBuyDropDown />
        </div>
      </div>
    </form>
  );
};

export default PemesananForm;
