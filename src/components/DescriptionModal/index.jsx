import React from 'react';
import { Modal, Box } from '@mui/material';
import styles from '../../utils/descriptionModalStyles';

const DescriptionModal = (props) => {
    const { open, onClose, description } = props;

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box 
                sx={styles}
                className="bg-white rounded-lg"
            >
                <h3 className='font-semibold text-2xl mb-3'>About</h3>
                <p>{description}</p>
            </Box>
        </Modal>
    );
}

export default DescriptionModal;