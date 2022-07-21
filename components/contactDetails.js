import React from "react";
import "survey-react/survey.css";

import { Media, Image } from "react-bootstrap";

export default function ContactDetails() {
  const people = [
    {
      name: "Gabriela Limonta",
      affiliation: "Nokia Bell Labs",
      email: "gabriela.limonta@nokia-bell-labs.com",
      photo: "/gaby.jpg",
    },
    {
      name: "Sid Rao",
      affiliation: "Aalto University",
      email: "siddharth.rao@aalto.fi",
      photo: "/sid.jpg",
    },
  ];
  return (
    <ul className="list-unstyled mt-4">
      {people.map((person, index) => (
        <Media
          as="li"
          className="mt-2"
          id={`contact-${index}`}
          key={`contact-${index}`}
        >
          <Image
            width={100}
            height={100}
            className="mr-3"
            src={person.photo}
            alt={`${person.name} picture`}
            roundedCircle
          />
          <Media.Body>
            <h5>{person.name}</h5>
            <p>
              {person.affiliation}
              <br /> {person.email}
            </p>
          </Media.Body>
        </Media>
      ))}
    </ul>
  );
}
