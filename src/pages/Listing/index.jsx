import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';
import ImagesModal from '../../components/ImagesModal';
import DescriptionModal from '../../components/DescriptionModal';
import AmenitiesModal from '../../components/AmenitiesModal';
import truncateText from '../../utils/truncateText'

const BASE_URL = "https://hostshare.s3.amazonaws.com/db.json";
// const BASE_URL = "https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685561688948&signature=-ePEfSK1Pv7q3Lm3d9RoI-ja55ze43sB9ftPrR1m1aI&downloadName=listings.json";
// const BASE_URL = process.env.REACT_APP_API_URL;

const Listing = () => {
  let {id} = useParams();
  const [openImages, setOpenImages] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);
  const [openAmenities, setOpenAmenities] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [maxGuestCapacity, setMaxGuestCapacity] = useState("");
  const [currency, setCurrency] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [review, setReview] = useState("");
  const [rate, setRate] = useState("");
  const [beds, setBeds] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [guests, setGuests] = useState("");
  const [baths, setBaths] = useState("");
  const [type, setType] = useState("");
  const [host, setHost] = useState("");
  const [isSuperhost, setIsSuperHost] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [mainImage, SetMainImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [thirdImage, setThirdImage] = useState("");
  const [fourthImage, setFourthImage] = useState("");
  const [fifthImage, setFifthImage] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [amenitiesCount, setAmenitiesCount] = useState("");

  useEffect(() => {
    const getListing = async () => {
      const listing = await fetchListing()
      let imgs = [];
      let amnties = [];
      const images = listing.images.data; 
      setImages(images);
      setTitle(listing.title);
      setPrice(listing.price);
      setCurrency(listing.currency.symbol);
      setMaxGuestCapacity(listing.maxGuestCapacity);
      setAmenitiesCount(listing.amenities.count);
      setRate(listing.ratings.value);
      setCity(listing.location.city);
      setCountry(listing.location.country.title);
      setDescription(listing.description);
      setBaths(listing.details.data[3].value);
      setBeds(listing.details.data[2].value);
      setBedrooms(listing.details.data[1].value);
      setGuests(listing.details.data[0].value);
      setReview(listing.visibleReviewCount);
      setHost(listing.host.name);
      setIsSuperHost(listing.host.isSuperhost);
      setAvatar(listing.host.avatar.url);
      setType(listing.type);
      SetMainImage(listing.mainImage.url);
      for (let i = 0; i < images.length; i++) {
        const el = images[i];
        if (el.type === "photo") {
          imgs.push(el.url);
        }
        if (imgs.length === 4) {
          break;
        }
      }
      for (let i = 0; i < amenities.length; i++) {
        const el = amenities[i];
        if (el.available) {
          amnties.push(el.title);
        }
        if (amnties.length === 8) {
          break;
        }
      }
      setAmenities(listing.amenities.data);
      setSecondImage(imgs[0]);
      setThirdImage(imgs[1]);
      setFourthImage(imgs[2]);
      setFifthImage(imgs[3]);
    }
    
    getListing();
  }, []);

  // Fetch Listing
  const fetchListing = async () => {
    let listing;
    const res = await fetch(BASE_URL);
    const info = await res.json()
    const data = info.listings;
    for (let i = 0; i < data.length; i++) {
      const el = data[i];
      if (el.info.id === id) {
        listing = el;
        break;
      }
    }
    return listing.info;
  }

  
  const handleOpenImages = () => setOpenImages(true); // open modal for images
  const handleCloseImages = () => setOpenImages(false); // close modal for images
  const handleOpenDescription = () => setOpenDescription(true); // open modal for description
  const handleCloseDescription = () => setOpenDescription(false); // close modal for description
  const handleOpenAmenities = () => setOpenAmenities(true); // open modal for description
  const handleCloseAmenities = () => setOpenAmenities(false); // close modal for description


  return (
    <>
      <NavigationBar />

      <section id='hero' className="container py-4">
        <h2 className='font-semibold text-3xl'>{title}</h2>
        <p className='my-2'>
          <span className='font-medium'>{rate} . </span>
          <span className='mr-2 font-medium'>{review} reviews</span>
          <span className='mr-2 font-light'> . {isSuperhost && `Superhost`} . </span>
          <span className='font-medium'>{city}, {country}</span>
        </p>

        <div className='grid lg:grid-cols-2 gap-4 py-3'>
          <div >
            <img
              className="lg:rounded-l-lg rounded-lg lg:h-full w-full object-cover transition-transform duration-500 transform" 
              src={mainImage} 
              alt="Beautiful house with 2 beds" 
              loading="lazy"
            />
          </div>
          <div className='grid grid-cols-2 gap-4 relative'>
            <div className='lg:block hidden'>
              <img
                className="h-64 w-full object-cover transition-transform duration-500 transform" 
                src={secondImage} 
                alt="Beautiful house with 2 beds" 
                loading="lazy"
              />
            </div>
            <div className='lg:block hidden'>
              <img
                className="rounded-tr-lg h-64 w-full object-cover transition-transform duration-500 transform" 
                src={thirdImage} 
                alt="Beautiful house with 2 beds" 
                loading="lazy"
              />
            </div>
            <div className='lg:block hidden'>
              <img
                className=" h-64 w-full object-cover transition-transform duration-500 transform" 
                src={fourthImage} 
                alt="Beautiful house with 2 beds" 
                loading="lazy"
              />
            </div>
            <div className='lg:block hidden'>
              <img
                className="rounded-br-lg h-64 w-full object-cover transition-transform duration-500 transform" 
                src={fifthImage} 
                alt="Beautiful house with 2 beds" 
                loading="lazy"
              />    
            </div>
              <button 
                variant='contained'
                className='absolute lg:bottom-4 bottom-8 right-0 mr-4 bg-white rounded p-2 border border-black font-medium'
                onClick={handleOpenImages}
              >
                View all photos
              </button>
          </div>
        </div>
      </section>

      <section id='details' className='container pb-6'>
        <div className='grid lg:grid-cols-3 gap-4'>
          <div className='lg:col-span-2 col'>
            <div id='host' className="border-b py-3">
              <figure className="flex justify-between items-center">
                <div className="">
                  <figcaption>
                    <h3 className='text-2xl font-medium'>Entire {type} hosted by {host}</h3>
                    <div className="font-light">
                      <p>
                        {`${guests} ${guests > 1 ? "guests" : "guest"} . ${bedrooms} ${bedrooms > 1 ? "bedrooms" : "bedroom"} . ${beds} ${beds > 1 ? "beds" : "bed"} . ${baths} ${baths > 1 ? "baths" : "bath"}`}
                      </p>
                    </div>
                  </figcaption>
                </div>
                <img 
                  className="w-24 h-24 rounded-full" 
                  loading="lazy"
                  src={avatar} 
                  alt={`${host} avatar`} 
                  width="384" 
                  height="512" 
                />
              </figure>
            </div>
            <div id='description' className='border-b py-4'>
              <p className='font-light mb-5'>
                {truncateText(description, 600)}
              </p>
              <p 
                className='font-medium underline' 
                style={{cursor: "pointer",}} 
                onClick={handleOpenDescription}
              >
                Show More
              </p>
            </div>
            <div id='amenities' className="border-b py-4">
              <h3 className='text-2xl font-medium'>What this place offers</h3>
              <div className='grid grid-cols-2 gap-4'>
                <div className='my-5'>
                  {
                    amenities.slice(0, 4).map((el, index) => {
                      return (
                        <p key={index} className='font-light my-3 py-2'>{el.title}</p>
                      );
                    })
                  }
                </div>
                <div className='my-5'>
                  {
                    amenities.slice(4, 8).map((el, index) => {
                      return (
                        <p key={index} className='lg:block hidden font-light my-3 py-2'>{el.title}</p>
                      );
                    })
                  }
                </div>
              </div>
              <button 
                variant='contained'
                className='bg-white rounded-md p-2 border border-black font-medium'
                onClick={handleOpenAmenities}
              >
                {`Show all ${amenitiesCount} amenities`}
              </button>
            </div>
          </div>
          <div className='pl-4 lg:block hidden'>
            <div className="shadow-2xl p-3 bg-white border rounded-md">
              <div className='grid grid-cols-2'>
                <div className='mb-4'>
                  <p>
                    <span className="font-medium text-2xl">{currency}{price}</span> 
                    <span className="font-light"> night</span>
                  </p>
                </div>
                <div className='text-right mb-4'>
                  <p>
                    <span className="font-medium">{rate}</span> 
                    <span className="font-medium"> . </span>
                    <span className="font-medium underline text-gray-500">{review} reviews</span>
                  </p>
                </div>
                <div className='border mt-3 p-2 rounded-tl-lg'>
                  <p className='font-medium'>CHECK-IN</p>
                  <p>date</p>
                </div>
                <div className='border mt-3 p-2 rounded-tr-lg'>
                  <p className='font-medium'>CHECK OUT</p>
                  <p>date</p>
                </div>
                <div className='border mb-3 col-span-2 p-2 rounded-b-lg'>
                  <p className='font-medium'>Guests</p>
                  <p>{maxGuestCapacity}</p>
                </div>
                <div className='col-span-2 mt-5'>
                  <button 
                    className='text-white font-medium rounded-md w-full p-4' 
                    style={{backgroundColor: "#329a9a"}}
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal to view all images */}
      <DescriptionModal
        open={openDescription}
        onClose={handleCloseDescription}
        description={description}
      />
      
      {/* Modal for description */}
      <ImagesModal
        open={openImages}
        onClose={handleCloseImages}
        images={images}
      />

      {/* Modal for Amenities */}
      <AmenitiesModal 
        id={id} 
        open={openAmenities}
        onClose={handleCloseAmenities}
      />
    </>
  )
}

export default Listing;