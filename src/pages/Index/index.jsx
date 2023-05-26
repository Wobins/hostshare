import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import ListingCard from '../../components/ListingCard';

const Index = () => {
  return (
    <>
      <NavigationBar />

      <section className="container py-4">
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4'>
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
      </section>

    
    </>
  );
}

export default Index;