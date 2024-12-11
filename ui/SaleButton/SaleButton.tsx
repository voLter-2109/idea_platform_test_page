import { FC, PropsWithChildren } from 'react';

const SaleButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="flex flex-col hover:shadow-xl transition-all w-full items-center bg-orange-500 
    text-cyan-50 py-1 px-2 rounded-md shadow-md"
    >
      <span>Купить</span>
      <span>за {children} ₽</span>
    </div>
  );
};

export default SaleButton;
