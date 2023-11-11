import React from "react";
import { LeftSideInfo } from "./ContactArray";
import { RightSideInfo } from "./ContactArray";
import "./Contact.css";
export default function ContactSecondSection() {
  return (
    <section>
      <div className="contact-info">
        <div className="left">
          <h1>Commercial Contacts</h1>
          <div className="contact-text">
            {LeftSideInfo.map((item) => (
            <LeftSideContactInfo key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div className="right">
          <div className="contact-text">
            {RightSideInfo.map((item) => (
            <RightSideContactInfo key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const LeftSideContactInfo = ({ text, gmail }) => {
  return (
    <div>
      <p>{text}</p>
      <span>{gmail}</span>
    </div>
  );
};

const RightSideContactInfo = ({ headerText, text, gmail }) => {
  return (
    <div>
      <div className="topContactInfo">
        <h1>{headerText}</h1>
      </div>
      <div className="bottomContactInfo">
        <p>{text}</p>
        <span>{gmail}</span>
      </div>
    </div>
  );
};
