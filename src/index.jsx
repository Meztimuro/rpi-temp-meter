import React, { useEffect, useState } from 'react';
import execa from 'execa';
import { render, Box } from 'ink';
import { TemperatureBadge } from './Components/TemperatureBadge.jsx';

const getTemperature = async () => {
  try {
    const {stdout} = await execa('cat', ['/sys/class/thermal/thermal_zone0/temp']);
    const degrees = (Number(stdout) / 1000).toFixed(2);
  
    return degrees;
  } catch {
    return null;
  }
};

const TemperatureApp = () => {
  const [temperature, setTemperature] = useState([0,0,0,0,0,0,0,0,0,0]);

  const mapTemperatureData = data => data.map( t => <TemperatureBadge temperature={t} /> )

  useEffect(() => {
    const timer = setInterval(async () => {
      const newValue = await getTemperature();
      setTemperature( state => [newValue, ...state].slice(0,10) );
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // todo: add graph
  return(
    <Box flexDirection="column">
      {mapTemperatureData(temperature)}
    </Box>
  )
}

render(<TemperatureApp/>);
