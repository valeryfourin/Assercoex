import { Button, Image, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SortModal = (props) => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
         <div className="item-card" onClick={() => {
             handleShow();
            }
        }>
            <div className="plug" style={{backgroundImage: props.img}}></div>
            <p className="visible-onhover"><b>{props.text}</b></p>
        </div>

        <Modal className="modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title><b>{props.text}</b></Modal.Title>
            </Modal.Header>
            <Modal.Body className="sortItemContainer container">
                {
                props.arr && props.arr.map(sort => 
                    <div className="method-item lazyImage" key={sort.id}>
                        <Image className="method-icon" loading="lazy" src={sort.img} alt={sort.title}/>
                        <p className="section-subtitle">{sort.title}</p>
                    </div>
                )
                }
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                {t('close.text')}
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
;};

export default SortModal;