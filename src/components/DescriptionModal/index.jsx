import React from 'react';
import { Modal, Box } from '@mui/material';

const DescriptionModal = (props) => {
    const { open, onClose, sx, description } = props;

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box 
                sx={sx}
                className="bg-white rounded-lg"
            >
                <h3 className='font-semibold text-2xl mb-3'>About</h3>
                <p>{description}</p>
            </Box>
        </Modal>
    );
}

export default DescriptionModal;