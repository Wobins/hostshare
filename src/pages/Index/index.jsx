import React, { Suspense, useEffect }  from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import NavigationBar from '../../components/NavigationBar';
import ListingsCards from '../../components/ListingsCards';

const Index = () => {
  useEffect(() => {
    document.title = "Hostshare";
  })

  return (
    <>
      <NavigationBar />

      <section className="container py-4">
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6'>
          <Suspense fallback={<CircularProgress />}>
            <ListingsCards />
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default Index;