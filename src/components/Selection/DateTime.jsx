import React, { useState, useEffect } from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { useStateContext } from '../../contexts/ContextProvider';

const ContainerPD = styled.div`
  padding: 50px;
`;

const Container = styled(Paper)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: rgba(255, 255, 255); 
  `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid rgb(230, 227, 227); 
`;

const CentralButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CentralLine = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  left: 50%;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 3px solid rgb(230, 227, 227);
  height: 100%;
  left: 50%;
`;
export default function DateTime() {
  const [valueDateInit, setValueDateInit] = useState(new Date());
  const [valueDateFinish, setValueDateFinish] = useState(new Date());
  const [valueTimeInit, setValueTimeInit] = useState(new Date());
  const [valueTimeFinish, setValueTimeFinish] = useState(new Date());

  const { currentColor } = useStateContext();

  useEffect(() => {
    try {
      const elements = document.getElementsByClassName('MuiDialogActions-root MuiDialogActions-spacing');
      // eslint-disable-next-line no-restricted-syntax
      for (const element of Object.values(elements)) {
        element.remove();
      }
    // eslint-disable-next-line no-empty
    } catch (e) {}
  });

  return (
    <ContainerPD>
      <Container elevation={16}>
        <Wrapper>
          <Title>
            <Typography sx={{ mt: 2, mb: 1 }} fontWeight={700}>Select DateTime Init</Typography>
          </Title>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              orientation="landscape"
              openTo="day"
              value={valueDateInit}
              shouldDisableDate={isWeekend}
              onChange={(newValue) => {
                setValueDateInit(newValue);
              }}
                  // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Divider variant="middle" />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticTimePicker
              ampm
              orientation="landscape"
              openTo="minutes"
              value={valueTimeInit}
              onChange={(newValue) => {
                setValueTimeInit(newValue);
              }}
              // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Wrapper>
        <Wrapper>
          <CentralLine> <Line /> </CentralLine>
          <CentralButton>
            <Button>TODAY</Button>
          </CentralButton>
          <CentralLine> <Line /> </CentralLine>
          <CentralButton>
            <Button>WEEK</Button>
          </CentralButton>
          <CentralLine>  <Line /> </CentralLine>
          <CentralButton>
            <Button>MONTH</Button>
          </CentralButton>
          <CentralLine> <Line /> </CentralLine>
        </Wrapper>
        <Wrapper>
          <Title>
            <Typography sx={{ mt: 2, mb: 1 }} fontWeight={700}>Select DateTime Finish</Typography>
          </Title>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              orientation="landscape"
              openTo="day"
              value={valueDateFinish}
              shouldDisableDate={isWeekend}
              onChange={(newValue) => {
                setValueDateFinish(newValue);
              }}
                  // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Divider variant="middle" />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticTimePicker
              ampm
              orientation="landscape"
              openTo="minutes"
              value={valueTimeFinish}
              onChange={(newValue) => {
                setValueTimeFinish(newValue);
              }}
              // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Wrapper>
      </Container>
    </ContainerPD>
  );
}
