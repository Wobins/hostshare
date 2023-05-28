import React from 'react';
import { Modal } from '@mui/material';
import ImagesList from '../ImagesList';
import styles from '../../utils/imagesModalStyles';

const ImagesModal = (props) => {
    const { open, onClose, images } = props;
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <ImagesList styles={styles} images={images} />
        </Modal>
    );
}

export default ImagesModal;