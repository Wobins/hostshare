import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import ListingCard from '../../components/ListingCard';
import ListingsCards from '../../components/ListingsCards';

const Index = () => {
  return (
    <>
      <NavigationBar />

      <section className="container py-4">
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4'>
          <ListingsCards />
        </div>
      </section>

    
    </>
  );
}

export default Index;