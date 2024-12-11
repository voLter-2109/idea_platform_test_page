import { ITicket } from '@/types/ticket.types';
import Image from 'next/image';
import { FC } from 'react';

import logo from '../../assets/logo.png';
import SaleButton from '../SaleButton/SaleButton';

import style from './ticket.module.scss';

interface Props {
  data: ITicket;
}
const Ticket: FC<Props> = ({ data }) => {
  const {
    arrival_date,
    arrival_time,
    departure_date,
    departure_time,
    destination,
    destination_name,
    origin,
    origin_name,
    price,
    stops,
  } = data;

  return (
    <button className={style.ticket}>
      <div className={style.left}>
        <Image src={logo} height={80} alt="logo" className="h-20 w-1/2" />
        <SaleButton>{price}</SaleButton>
      </div>
      <div className={style.right}>
        <div className={style.test}>
          <p className={style.time}>{departure_time}</p>
          <p className={style.originName}>
            {origin}, {origin_name}
          </p>
          <p className={style.date}>{departure_date}</p>
        </div>
        <div className={style.stops}>{stops} Пересадки</div>
        <div>
          <p className={style.time}>{arrival_time}</p>
          <p className={style.originName}>
            {destination_name},{destination}
          </p>
          <p className={style.date}>{arrival_date}</p>
        </div>
      </div>
    </button>
  );
};

export default Ticket;
