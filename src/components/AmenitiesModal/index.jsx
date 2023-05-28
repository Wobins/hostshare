import React , { useState, useEffect } from 'react';
import { Modal, Box } from '@mui/material';
import groups from '../../utils/groups';
import styles from '../../utils/amenitiesModalStyles';

const AmenitiesModal = (props) => {
    const { open, onClose, id } = props;
    const [amenities, setAmenities] = useState([]);

    useEffect(() => {
        const getAmenities = async () => {
            const amnties = await fetchAmenities();
            setAmenities(amnties);
            console.log("amenisties", amenities)
        }
        getAmenities();
    }, []);

    // Fetch Listing
    const fetchAmenities = async () => {
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
                                    amenities.map(el => {
                                        return (el.group === group && <p className='font-light mb-1'>{el.title}</p>);
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