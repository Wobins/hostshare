import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import cities from '../../utils/cities';
import ListingCard from '../ListingCard';


const BASE_URL = "https://hostshare.s3.amazonaws.com/db.json";
// const BASE_URL = "https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685561688948&signature=-ePEfSK1Pv7q3Lm3d9RoI-ja55ze43sB9ftPrR1m1aI&downloadName=listings.json";
// const BASE_URL = process.env.REACT_APP_API_URL;

const ListingsCards = () => {
  let [searchCity, setSearchCity] = useSearchParams();
  let cityQuery = searchCity.get("city");
  const [listings, setListings] = useState([]);
  const [listingsByCity, setListingsByCity] = useState([]);

  useEffect(() => {
    document.title = `Hostshare | ${cityQuery}`
  }, [cityQuery])

  useEffect(() => {
    const getListings = async () => {
      const listingsFromServer = await fetchListings()
      setListings(listingsFromServer)
    }
    
    const getListingsByCity = async (city_filter) => {
      const listingsByCityFromServer = await fetchListingsByCity(city_filter);
      setListingsByCity([...new Set(listingsByCityFromServer)]);
    }
  
    getListings();
    getListingsByCity(cityQuery);
  }, [cityQuery, searchCity]);

  // Fetch Listings
  const fetchListings = async () => {
    const res = await fetch(BASE_URL);
    const info = await res.json()
    const data = info.listings;
    return data;
  }
  
  // Fetch Listings by city
  const fetchListingsByCity = async (city) => {
    const res = await fetch(BASE_URL);
    const info = await res.json()
    const data = info.listings;
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
          listingsByCity.filter((obj, index, self) => {
            // Check if the current object is the first occurrence of the id in the array
            return index === self.findIndex((o) => o.id === obj.id);
          }).map((listing, index) => (
            <ListingCard
              key={index}
              id={listing.info.id}
              airbnb={listing.ref}
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
              airbnb={listing.ref}
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