import React, { useEffect, useState } from 'react';
import ListingCard from '../ListingCard';

const ListingsCards = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const getListings = async () => {
      const listingsFromServer = await fetchListings()
      setListings(listingsFromServer)
    }
  
    getListings()
  }, []);

  // Fetch Listings
  const fetchListings = async () => {
    const res = await fetch('http://localhost:5000/listings/');
    const data = await res.json();
    // console.log(data);
    return data;
  }

  return (
    <>
      {
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
      }
    </>
  );
};

export default ListingsCards;