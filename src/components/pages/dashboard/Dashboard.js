import React from 'react';
import './Dashboard.css';

import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Dashboard = () => {

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '63f9b07927e4fcb2a5d0f084cfe5d0ae',
    lat: '36.814387',
    lon: '50.7737021',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  return (
    <>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        // locationLabel="Munich"
        unitsLabels={{ temperature: '°', windSpeed: 'کیلومتر بر ساعت' }}
        showForecast={false}
      />
    </>
  )
}

export default Dashboard