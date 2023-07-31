import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Example(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: "https://via.placeholder.com/200", // Replace this with the actual image URL
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "https://via.placeholder.com/200", // Replace this with the actual image URL
        }
    ];

    return (
        <Carousel>
            {items.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
    );
}

function Item(props) {
    return (
        <Paper>
            <img src={props.item.image} alt={props.item.name} style={{ width: "100%", height: "auto" }} />
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    );
}

export default Example;
