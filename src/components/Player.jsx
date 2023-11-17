//* This is a template of a single player. It contains general fields that are common to all the players.
//A card and ListGroup style are imported from React Bootsrap to hasten the design.
import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

/*The "Player" function(component) is a child of the 'App' component. The component takes props which are the keys of the player data. The props are deconstructed by using curly braces in the function. */

function Player({ name, team, nationality, jerseyNumber, age, image }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={image}
          height={300}
          style={{ objectFit: "fill" }}
          /*Inline styles are applied by using double curly braces. The images came with various sizes, so the height and object-fill attributes were used to define the images to a common dimension and window fit.*/
        />
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Name: {name}</ListGroup.Item>
          <ListGroup.Item>Team: {team}</ListGroup.Item>
          <ListGroup.Item>Nationality: {nationality}</ListGroup.Item>
          <ListGroup.Item>Jersey Number: {jerseyNumber}</ListGroup.Item>
          <ListGroup.Item>Age: {age}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
};

export default Player;
