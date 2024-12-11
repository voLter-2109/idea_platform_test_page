import { FC, PropsWithChildren } from 'react';
import style from './saleButton.module.scss';

const SaleButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style.customButton}>
      <span>Купить</span>
      <span>за {children} ₽</span>
    </div>
  );
};

export default SaleButton;
