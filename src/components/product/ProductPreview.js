import React from 'react';
import Card from 'react-bootstrap/Card';

const ProductPreview = props => {
    return (
        <div className='ProductPreview'>
            <Card>
                <Card.Body>
                    <img src={props.image} />

                    <div className='prod-details'>
                        <p>{props.name}</p>
                        <p>${props.price}</p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductPreview;
