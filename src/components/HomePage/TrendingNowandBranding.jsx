import React from "react";
import sparkles from "..//..//assets/sparkles.svg";
import bookmark from "..//..//assets/bookmark.svg";
import { data, brandingdata, europedata } from "./Arrays/CardArray";
import "./HomePage.css";

export default function TrendingNowandBranding({ heading }) {
  return (
    <section>
      <div className="section_2">
        <h1 className="trending-row">{heading}</h1>
        <img src={sparkles} alt="" />
        <div className="cards">
          {heading === "Trending now"
            ? data.map((item) => <Card key={item.id} {...item} />)
            : heading === "Brand new trips" ? brandingdata.map((item) => <Card key={item.id} {...item} />)
            : europedata.map((item) => <Card key={item.id} {...item} />)}
        </div>
      </div>
    </section>
  );
}



const Card = ({ loved, image, typeofTrips, tripHeader, days, amount, sparklesLovedButton }) => {
  const divStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className="card">
      <div className="image-part" style={{...divStyle, justifyContent: sparklesLovedButton ? 'space-between' : 'flex-end' }}>
       {sparklesLovedButton &&  
       <div className="sparkles">
          <img src={sparkles} alt="sparkles" />
          <span>{loved}</span>
        </div>}
        <div className="bookmark">
          <img src={bookmark} alt="bookmark" />
        </div>
      </div>
      <div className="text-part">
        <span>{typeofTrips}</span>
        <h3>{tripHeader}</h3>
        <div>
          <span>{days}</span>
          <p>{amount}</p>
        </div>
      </div>
    </div>
  );
};
