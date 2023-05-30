import React, { useEffect, useState } from 'react';
import { useSearchParams, useParams, useLocation } from "react-router-dom";
import cities from '../../utils/cities';
import ListingCard from '../ListingCard';

// const cities = ["Hardwick", "Miami", "Maryville"]
const BASE_URL = process.env.REACT_APP_API_URL;

const ListingsCards = () => {
  // let location = useLocation();
  let [searchCity, setSearchCity] = useSearchParams();
  const cityQuery = searchCity.get("city");
  const [listings, setListings] = useState([]);
  const [listingsByCity, setListingsByCity] = useState([]);

  useEffect(() => {
    console.log(searchCity);
    console.log(cityQuery);
    const getListings = async () => {
      const listingsFromServer = await fetchListings()
      setListings(listingsFromServer)
    }
    
    const getListingsByCity = async (city_filter) => {
      console.log("cities imported", cities);
      console.log("getListings By filter")
      const listingsByCityFromServer = await fetchListingsByCity(city_filter);
      setListingsByCity([...new Set(listingsByCityFromServer)]);
      console.log(listingsByCityFromServer);
    }
  
    getListings();
    getListingsByCity(cityQuery);
  }, [cityQuery, searchCity]);

  // Fetch Listings
  const fetchListings = async () => {
    const res = await fetch(BASE_URL);
    const info = await res.json()
    const data = info.data;
    return data;
  }
  
  // Fetch Listings by city
  const fetchListingsByCity = async (city) => {
    const res = await fetch(BASE_URL);
    const info = await res.json()
    const data = info.data;
    let listings = [];
    data.forEach((el) => {
      if (el.info.location.city === city) {
        listings.push(el)
      }
    });
    return [...new Set(listings)];
  }

  return (
    <>
      {
        cities.includes(cityQuery) ? (
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