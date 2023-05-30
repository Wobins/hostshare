import React , { useState, useEffect } from 'react';
import { Modal, Box } from '@mui/material';
import groups from '../../utils/groups';
import styles from '../../utils/amenitiesModalStyles';

const BASE_URL = "https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685561688948&signature=-ePEfSK1Pv7q3Lm3d9RoI-ja55ze43sB9ftPrR1m1aI&downloadName=listings.json";
// const BASE_URL = process.env.REACT_APP_API_URL;

const AmenitiesModal = (props) => {
    const { open, onClose, id } = props;
    const [amenities, setAmenities] = useState([]);

    useEffect(() => {
        const getAmenities = async () => {
            const amnties = await fetchAmenities();
            setAmenities(amnties);
        }
        getAmenities();
    }, []);

    // Fetch Listing
    const fetchAmenities = async () => {
        let listing;
        const res = await fetch(BASE_URL);
        const info = await res.json()
        const data = info.data;
        for (let i = 0; i < data.length; i++) {
            const el = data[i];
            if (el.info.id === id) {
                listing = el;
                break;
            }
        }
        return listing.info.amenities.data;
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box 
                sx={styles}
                className="bg-white rounded-lg"
            >
                <h3 className='font-semibold text-4xl mb-4'>What this place offers</h3>
                {
                    groups.map((group, index) => {
                        return (
                            <>
                                <h2 className='text-2xl font-medium mb-2'>{group}</h2>
                                {
                                    amenities.map((el, index) => {
                                        return (el.group === group && <p key={index} className='font-light mb-1'>{el.title}</p>);
                                    })
                                }
                            </>
                        );
                    })
                }
                
            </Box>
        </Modal>
    );
}

export default AmenitiesModal;