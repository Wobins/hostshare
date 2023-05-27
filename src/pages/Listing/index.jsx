import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';

const Listing = () => {
  let {id} = useParams();
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [review, setReview] = useState("");
  const [type, setType] = useState("");
  const [host, setHost] = useState("");
  const [avatar, setAvatar] = useState("");
  const [mainImage, SetMainImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [thirdImage, setThirdImage] = useState("");
  const [fourthImage, setFourthImage] = useState("");
  const [fifthImage, setFifthImage] = useState("");

  useEffect(() => {
    const getListing = async () => {
      const listing = await fetchListing()
      console.log(listing);
      setTitle(listing.title);
      setCity(listing.location.city);
      setCountry(listing.location.country.title);
      setReview(listing.visibleReviewCount);
      setHost(listing.host.name);
      setAvatar(listing.host.avatar.url);
      setType(listing.type);
      SetMainImage(listing.mainImage.url);
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

  return (
    <>
      <NavigationBar />

      <section className="container border py-4">
        <h2>{title}</h2>
        <p><span className='mr-5'>{review}</span><span>{city}, {country}</span></p>

        <div className='grid grid-cols-2 gap-4 py-3'>
          <div style={{width: "300px", height: "220px"}}>
            <img
              className="rounded-lg h-64 w-full object-cover transition-transform duration-500 transform" 
              src={{mainImage}} 
              alt="Beautiful house with 2 beds" 
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>image</div>
            <div>image</div>
            <div>image</div>
            <div>image</div>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-2'>
            <div className="border">
              <figure className="flex justify-between items-center bg-slate-100 dark:bg-slate-800">
                <div className="py-4">
                  <figcaption className="font-medium">
                    <h3>Entire {type} hosted by {host}</h3>
                    <div className="font-light">
                      Staff Engineer, Algolia
                    </div>
                  </figcaption>
                </div>
                <img className="w-24 h-24 rounded-full" src={avatar} alt="" width="384" height="512" />
              </figure>
            </div>
            <div className="border">kkmf jfkkkkek</div>
            <div className="border">kkmf jfkkkkek</div>
          </div>
        </div>
      </section>

      <section className="container border">
        <h3>Where you 'll be</h3>
        <p>city, Country</p>
        <div>
          mapppppppppppppppppppppppppppppppppppppppppppppp
        </div>
      </section>

    
    </>
  )
}

export default Listing;