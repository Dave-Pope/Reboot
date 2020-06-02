import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductPreview from '../product/ProductPreview';

const Grid = () => {
    const products = useSelector(state => state.products);

    return (
        <div className='Grid'>
            <Container>
                <div className='grid-header'>
                    <h2>Featured Products</h2>

                    <div className='grid-tabs'>
                        <p>
                            <span>BEST</span> SELLERS
                        </p>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <p>NEW ARRIVALS</p>
                    </div>
                </div>

                <Row className='row-cols-2'>
                    {products.map((prod, idx) => (
                        <Col sm={4} key={idx}>
                            <ProductPreview
                                name={prod.name}
                                price={prod.price}
                                image={prod.image}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Grid;
