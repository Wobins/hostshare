import React from 'react';
import { Modal } from '@mui/material';
import ImagesList from '../ImagesList';

const ImagesModal = (props) => {
    const { open, onClose, sx, images } = props;
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <ImagesList styles={sx} images={images} />
        </Modal>
    );
}

export default ImagesModal;