import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import cities from '../../utils/cities';
import ListingCard from '../ListingCard';

const ListingsCards = () => {
  let [searchCity, setSearchCity] = useSearchParams();
  const cityQuery = searchCity.get("city");
  const [listings, setListings] = useState([]);
  const [listingsByCity, setListingsByCity] = useState([]);

  useEffect(() => {
    console.log(cityQuery);
    const getListings = async () => {
      const listingsFromServer = await fetchListings()
      setListings(listingsFromServer)
    }
    
    const getListingsByCity = async (city_filter) => {
      console.log(cities);
      console.log("getListings By filter")
      const listingsByCityFromServer = await fetchListingsByCity(city_filter);
      setListingsByCity(listingsByCityFromServer);
      console.log(listingsByCityFromServer);
    }
  
    getListings();
    getListingsByCity(cityQuery);
  }, []);

  // Fetch Listings
  const fetchListings = async () => {
    const res = await fetch('http://localhost:5000/listings/');
    const data = await res.json();
    // console.log(data);
    return data;
  }
  
  // Fetch Listings by city
  const fetchListingsByCity = async (city) => {
    const res = await fetch('http://localhost:5000/listings/');
    const data = await res.json();
    let listings = [];
    data.forEach((el) => {
      if (el.info.location.city === city) {
        cities.push(el)
      }
    });
    return listings;
  }

  return (
    <>
      {
        cityQuery !== "" && cities.includes(cityQuery) ? (
          listingsByCity.map((listing, index) => (
            <ListingCard
              key={index}
              id={listing.info.id}
              title={listing.info.title}
              city={listing.info.location.city}
              country={listing.info.location.country.title}
              rating={listing.info.ratings.value}
              mainImage={listing.info.mainImage.url}
              secondImage={listing.info.images.data[1].url}
              thirdImage={listing.info.images.data[2].url}
              fourthImage={listing.info.images.data[3].url}
              nightlyRate={listing.info.price}
              currency={listing.info.currency.symbol}
            />
          ))
        ) : (
          listings.map((listing, index) => (
            <ListingCard
              key={index}
              id={listing.info.id}
              title={listing.info.title}
              city={listing.info.location.city}
              country={listing.info.location.country.title}
              rating={listing.info.ratings.value}
              mainImage={listing.info.mainImage.url}
              secondImage={listing.info.images.data[1].url}
              thirdImage={listing.info.images.data[2].url}
              fourthImage={listing.info.images.data[3].url}
              nightlyRate={listing.info.price}
              currency={listing.info.currency.symbol}
            />
          ))

        )
      }
    </>
  );
};

export default ListingsCards;