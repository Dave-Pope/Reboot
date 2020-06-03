import React from 'react';
import Card from 'react-bootstrap/Card';

const ProductPreview = props => {
    return (
        <div className='ProductPreview'>
            <Card>
                <Card.Body>
                    <img src={props.image} aly="" />

                    <div className='prod-details'>
                        <p className='name'>{props.name}</p>
                        <p className='price'>${props.price}</p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductPreview;
