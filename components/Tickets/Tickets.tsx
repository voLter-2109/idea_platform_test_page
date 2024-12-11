'use client';

import { FC } from 'react';

import { ITicket } from '@/types/ticket.types';
import CustomError from '@/ui/CustomError/CustomError';
import Ticket from '@/ui/Ticket/Ticket';

interface Props {
  error: any;
  tickets: ITicket[] | null;
}

const Tickets: FC<Props> = ({ error, tickets }) => {
  if (error) return <CustomError />;

  if (!tickets?.length)
    return (
      <div className="w-full text-center">
        <p>билетов не найдено</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-2 flex-1 ">
      {tickets.map((item) => {
        return <Ticket data={item} key={`${item.arrival_date}${item.price}`} />;
      })}
    </div>
  );
};

export default Tickets;
