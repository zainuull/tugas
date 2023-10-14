import { atom, useAtom } from 'jotai';

const store = atom({
  _id: '',
  name: '',
  address: '',
  destination_city: '',
  price: 0,
  total_buy: 0,
  discount: 0,
  total_price: 0,
});

export const useForm = () => useAtom(store);
