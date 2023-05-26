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
          <ListingCard />
        ))
      }
    </>
  );
};

export default ListingsCards;