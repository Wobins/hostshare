import React, { useEffect, useState } from 'react';
import {
  Button,
  Box, 
  Modal,
  Typography
} from '@mui/material';
import { useParams } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';
import ImagesList from '../../components/ImagesList';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "60%",
  border: '1px solid #000',
};

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "60%",
  overflowY: "scroll",
  height: "75%",
  bgcolor: 'background.paper',
  border: '1px solid #fff',
  boxShadow: 24,
  p: 4,
};

const Listing = () => {
  let {id} = useParams();
  const [openImages, setOpenImages] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);
  const [openAmenities, setOpenAmenities] = useState(false);
  const [title, setTitle] = useState("");
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
  const [amenitiesToShow, setAmenitiesToShow] = useState([]);
  const [amenitiesCount, setAmenitiesCount] = useState("");

  useEffect(() => {
    const getListing = async () => {
      const listing = await fetchListing()
      let imgs = [];
      const images = listing.images.data; 
      setImages(images);
      console.log(listing);
      setTitle(listing.title);
      setAmenities(listing.amenities.data);
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
      
      setSecondImage(imgs[0]);
      setThirdImage(imgs[1]);
      setFourthImage(imgs[2]);
      setFifthImage(imgs[3]);
      // setAmenitiesToShow(amenities_to_show);
    }
    
    getListing();
  }, []);

  // Fetch Listing
  const fetchListing = async () => {
    let listing;
    const res = await fetch(`http://localhost:5000/listings`);
    const data = await res.json();
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
  const handleAmenities = () => {
    let amenities_to_show = [];
    for (let i = 0; i < amenities.length; i++) {
      const el = amenities[i];
      if (el.available === true) {
        amenities_to_show.push(el.title);
      }
      if (amenities_to_show.length === 8) {
        break;
      }
    }
    return (
      <>
        <p>amenities_to_show[0]</p>
        <p>amenities_to_show[0]</p>
        <p>amenities_to_show[0]</p>
        <p>amenities_to_show[0]</p>
      </>
    );
  }; // close modal for description

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

        <div className='grid grid-cols-2 gap-4 py-3'>
          <div >
            <img
              className="rounded-l-lg h-full w-full object-cover transition-transform duration-500 transform" 
              src={mainImage} 
              alt="Beautiful house with 2 beds" 
              loading="lazy"
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <img
                className="h-64 w-full object-cover transition-transform duration-500 transform" 
                src={secondImage} 
                alt="Beautiful house with 2 beds" 
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="rounded-tr-lg h-64 w-full object-cover transition-transform duration-500 transform" 
                src={thirdImage} 
                alt="Beautiful house with 2 beds" 
                loading="lazy"
              />
            </div>
            <div>
              <img
                className=" h-64 w-full object-cover transition-transform duration-500 transform" 
                src={fourthImage} 
                alt="Beautiful house with 2 beds" 
                loading="lazy"
              />
            </div>
            <div className='relative'>
              <img
                className="rounded-br-lg h-64 w-full object-cover transition-transform duration-500 transform" 
                src={fifthImage} 
                alt="Beautiful house with 2 beds" 
                loading="lazy"
              />    
              <button 
                variant='contained'
                className='absolute bottom-4 right-0 mr-4 bg-white rounded p-2 border font-medium'
                onClick={handleOpenImages}
              >
                View all photos
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id='details' className='container'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-2'>
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
            <div id='description' className='border-b py-3'>
              <p className='font-light truncate ...'>
                {description}
              </p>
              <p 
                className='font-medium underline' 
                style={{cursor: "pointer",}} 
                onClick={handleOpenDescription}
              >
                Show More
              </p>
            </div>
            <div id='amenities' className="border-b py-3">
              <h3 className='text-2xl font-medium'>What this place offers</h3>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  {/* <p>{amenitiesToShow[0]}</p>
                  <p>{amenitiesToShow[1]}</p>
                  <p>{amenitiesToShow[2]}</p>
                  <p>{amenitiesToShow[3]}</p> */}
                </div>
                <div>
                  {handleAmenities}
                </div>
                {/* {amenities.map((amenity, index) => ()} */}
              </div>
              <button 
                variant='contained'
                className='bg-white rounded-md p-2 border font-medium'
                onClick={handleOpenImages}
              >
                {`Show all ${amenitiesCount} amenities`}
              </button>
            </div>
            <div className="reservation">Reservation block</div>
          </div>
        </div>
      </section>

      {/* Modal to view all images */}
      <Modal
        open={openDescription}
        onClose={handleCloseDescription}
      >
        <Box 
          sx={style2}
          className="bg-white rounded-lg"
        >
          <h3 className='font-semibold text-2xl mb-3'>About</h3>
          {description}
        </Box>
      </Modal>
      
      {/* Modal for description */}
      <Modal
        open={openImages}
        onClose={handleCloseImages}
      >
        <ImagesList styles={style} images={images} />
      </Modal>
      
      {/* Modal for amenities */}
      <Modal
        open={openImages}
        onClose={handleCloseImages}
      >
        <Box 
          sx={style2}
          className="bg-white rounded-lg"
        >
          {
            amenities.map((amenity, index) => {
              return (
                <>
                  <p key={index}>{amenity.group}</p>

                </>
              );
            })
          }
        </Box>
      </Modal>
    </>
  )
}

export default Listing;