'use client';

import { ICheckBox } from '@/types/filters.types';
import { ITicketsRes } from '@/types/ticket.types';
import CustomLoading from '@/ui/CustomLoading/CustomLoading';
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import Filter from '../Filters/Filter';
import Tickets from '../Tickets/Tickets';

const initialState: ICheckBox = {
  none: true,
  one: true,
  two: true,
  three: true,
};

const fetchData = async (): Promise<ITicketsRes> => {
  const response = await fetch('/tickets.json');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const HomePage = () => {
  const [checkBox, setCheckBox] = useState<ICheckBox>(initialState);
  const [textValue, setTextValue] = useState('');

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckBox({
      ...checkBox,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeInputValue = (value: string) => {
    setTextValue(value);
  };

  const resetFields = () => {
    setCheckBox(initialState);
    setTextValue('');
  };

  const {
    data: ticketsData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['fetchLocalData'],
    queryFn: () => {
      return fetchData();
    },
    select: (data) => {
      return data.tickets;
    },
    retry: false,
  });

  const filteredTickets = useMemo(() => {
    if (!ticketsData) return [];

    return ticketsData.filter((ticket) => {
      const matchesCheckBox =
        (checkBox.none && ticket.stops === 0) ||
        (checkBox.one && ticket.stops === 1) ||
        (checkBox.two && ticket.stops === 2) ||
        (checkBox.three && ticket.stops === 3);

      const matchesTextValue = ticket.origin_name
        .toLowerCase()
        .includes(textValue.toLowerCase());

      return matchesCheckBox && matchesTextValue;
    });
  }, [ticketsData, checkBox, textValue]);

  if (isLoading) return <CustomLoading />;

  return (
    <div
      className="w-full h-full flex gap-4 pt-7 
     [&>div]:rounded-md max-lg:flex-col"
    >
      <Filter
        checkBox={checkBox}
        textValue={textValue}
        resetFields={resetFields}
        handleChangeCheckBox={handleChangeCheckBox}
        handleChangeInputValue={handleChangeInputValue}
      />
      <Tickets error={error} tickets={filteredTickets || null} />
    </div>
  );
};

export default HomePage;
