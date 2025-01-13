import React from "react";
import "./Card.css";
import CardTittle from "./CardTitle";
import CardComments from "./CardComments";
import ImageComponent from "../ImageComponent";

function Card({ articleDetails, redirectHandled }) {
  return (
    <div className="col" data-testid="card" onClick={() => redirectHandled("/articleDetails/" + articleDetails?.id, { state: articleDetails })}>
      <div className="card mb-4 box-shadow">
        <ImageComponent
          src={articleDetails?.media?.[0]?.["media-metadata"][2]?.url}
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <CardTittle tittle={articleDetails.title} />
          <CardComments comments={200} />
        </div>
      </div>
    </div>
  );
}

export default Card;
