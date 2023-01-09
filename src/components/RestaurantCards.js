import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function RestaurantCards(props) {
    return (
        <Link style={{textDecoration:'none'}} to={`restaurant/${props.item.id}`}>
            <Card className="my-3 p-3 rounded">
                <Card.Img src={props.item.photograph} className="p-3"/>
                <Card.Title><h4>{props.item.name}</h4></Card.Title>
                <Card.Text>
                    <p>Cuisine:{props.item.cuisine_type}</p>
                </Card.Text>
                <Card.Text>
                    <p>{props.item.neighborhood}</p>
                </Card.Text>
            </Card>
        </Link>
    )
}

export default RestaurantCards