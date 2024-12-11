'use client';

import { ICheckBox } from '@/types/filters.types';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material';
import { FC } from 'react';

interface Props {
  textValue: string;
  checkBox: ICheckBox;
  resetFields: () => void;
  handleChangeInputValue: (value: string) => void;
  handleChangeCheckBox: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter: FC<Props> = ({
  checkBox,
  textValue,
  resetFields,
  handleChangeCheckBox,
  handleChangeInputValue,
}) => {
  const { none, one, three, two } = checkBox;

  return (
    <div className=" w-1/4 max-lg:w-full h-fit shadow-md border p-2 flex flex-col gap-2">
      <Typography variant="h6">Фильтр</Typography>
      <hr />
      <Box component="div">
        <Typography variant="h6">Пересадки</Typography>
        <FormControl component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={none}
                  onChange={handleChangeCheckBox}
                  name="none"
                />
              }
              label="Без пересадок"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={one}
                  onChange={handleChangeCheckBox}
                  name="one"
                />
              }
              label="1 пересадка"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={two}
                  onChange={handleChangeCheckBox}
                  name="two"
                />
              }
              label="2 пересадки"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={three}
                  onChange={handleChangeCheckBox}
                  name="three"
                />
              }
              label="3 пересадки"
            />
          </FormGroup>
        </FormControl>
      </Box>
      <hr />
      <Box component="div">
        <Typography variant="h6">Поиск</Typography>
        <TextField
          className="w-full"
          label="Standard"
          variant="standard"
          value={textValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeInputValue(event.target.value);
          }}
        />
      </Box>
      <hr />
      <Button onClick={resetFields} variant="outlined">
        Очистить
      </Button>
    </div>
  );
};

export default Filter;
