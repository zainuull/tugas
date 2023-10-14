import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { FaCity } from 'react-icons/fa';
import { Menu } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useForm } from '../../store/store.form';

export default function CityDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useForm();
  const [cityName, setCityName] = useState('Pilih Kota');
  const city = ['Solo', 'Semarang', 'Yogyakarta', 'Surabaya'];

  //to choose city value and return name, and id
  const handleCity = (item: any) => {
    setCityName(item?.target.textContent);
    switch (item?.target.textContent) {
      case 'Solo':
        setForm({
          ...form,
          destination_city: item.target.textContent,
          price: 450000,
        });
        break;
      case 'Semarang':
        setForm({
          ...form,
          destination_city: item.target.textContent,
          price: 350000,
        });
        break;
      case 'Yogyakarta':
        setForm({
          ...form,
          destination_city: item.target.textContent,
          price: 400000,
        });
        break;
      case 'Surabaya':
        setForm({
          ...form,
          destination_city: item.target.textContent,
          price: 550000,
        });
        break;
      default:
        break;
    }
  };

  return (
    <Menu as="div" className="w-full cursor-pointer relative bg-white">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-[34px] items-center px-[18px] border rounded-lg w-full text-left outline-none">
        <FaCity className="dropdown-icon-primary" />
        <div>
          <h1 className="text-sm text-gray-800">{cityName}</h1>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {city.map((city: string) => (
          <Menu.Item
            key={city}
            className="cursor-pointer hover:text-gray-700 transition"
            as="li"
            onClick={(e) => handleCity(e)}>
            {city}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
