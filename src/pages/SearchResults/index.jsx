import React, { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import NavigationBar from '../../components/NavigationBar';
import ListingsCards from '../../components/ListingsCards';

const SearchResults = () => {
  let [searchCity, setSearchCity] = useSearchParams();
  const city = searchCity.get("city");

  useEffect(() => {
    console.log(city);
  }, [])


  return (
    <>
      <NavigationBar />

      <section className="container py-4">
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6'>
          <ListingsCards search={city} />
        </div>
      </section>
    </>
  )
}

export default SearchResults;