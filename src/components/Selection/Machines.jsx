import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Switch from '@mui/material/Switch';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import { useStateContext } from '../../contexts/ContextProvider';
import Cartagena from './Cartagena.jpg';
import Madrid from './Madrid.jpg';
import Uruguay from './Uruguay.jpg';
import Brasil from './Brasil.jpg';
import Usa from './Usa.jpg';

const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardMidle = styled(CardContent)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function Machines() {
  const { currentColor } = useStateContext();

  return (
    <Container>
      <Wrapper>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={Cartagena}
            alt="green iguana"
          />
          <CardMidle>
            <div>
              <Typography fontWeight={700}>Colombia</Typography>
              <Typography variant="body2" color="text.secondary">
                <LocationOnIcon sx={{ color: currentColor }} /> Cartagena
              </Typography>
            </div>
            <Switch />
          </CardMidle>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={Uruguay}
            alt="green iguana"
          />
          <CardMidle>
            <div>
              <Typography fontWeight={700}>Uruguay</Typography>
              <Typography variant="body2" color="text.secondary">
                <LocationOnIcon sx={{ color: currentColor }} /> Montevideo
              </Typography>
            </div>
            <Switch />
          </CardMidle>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={Madrid}
            alt="green iguana"
          />
          <CardMidle>
            <div>
              <Typography fontWeight={700}>Colombia</Typography>
              <Typography variant="body2" color="text.secondary">
                <LocationOnIcon sx={{ color: currentColor }} /> Madrid
              </Typography>
            </div>
            <Switch />
          </CardMidle>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={Brasil}
            alt="green iguana"
          />
          <CardMidle>
            <div>
              <Typography fontWeight={700}>Brasil</Typography>
              <Typography variant="body2" color="text.secondary">
                <LocationOnIcon sx={{ color: currentColor }} /> Curitiba
              </Typography>
            </div>
            <Switch />
          </CardMidle>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={Usa}
            alt="green iguana"
          />
          <CardMidle>
            <div>
              <Typography fontWeight={700}>USA</Typography>
              <Typography variant="body2" color="text.secondary">
                <LocationOnIcon sx={{ color: currentColor }} /> Charlotte, NC
              </Typography>
            </div>
            <Switch />
          </CardMidle>
        </Card>
      </Wrapper>
      <Divider orientation="vertical" flexItem>
        -
      </Divider>
      <Wrapper>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label A" />
                <FormControlLabel control={<Checkbox />} label="Label B" />
                <FormControlLabel control={<Checkbox />} label="Label C" />
                <FormControlLabel control={<Checkbox />} label="Label D" />
                <FormControlLabel control={<Checkbox />} label="Label E" />
                <FormControlLabel control={<Checkbox />} label="Label F" />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Label A" />
                  <FormControlLabel control={<Checkbox />} label="Label B" />
                  <FormControlLabel control={<Checkbox />} label="Label C" />
                  <FormControlLabel control={<Checkbox />} label="Label D" />
                  <FormControlLabel control={<Checkbox />} label="Label E" />
                  <FormControlLabel control={<Checkbox />} label="Label F" />
                </FormGroup>
              </AccordionDetails>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
          </Accordion>
        </div>
      </Wrapper>
      <Divider orientation="vertical" flexItem>
        -
      </Divider>
      <Wrapper>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
          </Accordion>
        </div>
      </Wrapper>
      <Divider orientation="vertical" flexItem>
        -
      </Divider>
      <Wrapper>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
          </Accordion>
        </div>
      </Wrapper>
      <Divider orientation="vertical" flexItem>
        -
      </Divider>
      <Wrapper>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
          </Accordion>
        </div>
      </Wrapper>
    </Container>

  );
}
