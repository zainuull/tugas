import { useForm } from '../../store/store.form';

const TotalBuyDropDown = () => {
  const [form, setForm] = useForm();

  const handleTotalBuy = (item: any) => {
    const totalBuy = parseInt(item?.target.value);

    if (totalBuy >= 3) {
      setForm({
        ...form,
        total_buy: totalBuy,
        discount: 10 / 100,
      });
    } else {
      setForm({
        ...form,
        total_buy: totalBuy,
      });
    }
  };

  return (
    <input
      id="total_buy"
      className="outline-none border hover:outline hover:outline-2 bg-gray-100 rounded-lg px-2 h-10"
      placeholder="Masukkan jumlah beli"
      onChange={(e) => handleTotalBuy(e)}
    />
  );
};

export default TotalBuyDropDown;
