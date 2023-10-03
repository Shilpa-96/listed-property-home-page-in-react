import React from "react";
import ImageSlider from "../imageslider/ImageSlider";
import "./ProductCard.css";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaBathSolid, LiaDirectionsSolid } from "react-icons/lia";
import { IoBedOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

export default function ProductCard({ item }) {
  const {
    location,
    city,
    name,
    room,
    bed,
    bath,
    area,
    emi,
    popular,
    img01,
    img02,
  } = item;
  const imgs = [img01, img02, img01, img02];
  return (
    <div className="product-card-container">
      <ImageSlider imgs={imgs} />
      {popular && <span className="popular">Popular</span>}
      <div className="location">
        <CiLocationOn className="location-icon" />
        {location}
      </div>
      <div className="name">{name}</div>
      <div className="spicifications">
        <div className="room">
          <span>
            <HiOutlineBuildingOffice2 />
          </span>
          <span>{room} Room</span>
        </div>
        <div className="bed">
          <span>
            <IoBedOutline />
          </span>
          <span>{bed} Bed</span>
        </div>
        <div className="bath">
          <span>
            <LiaBathSolid />
          </span>
          <span>{bath} Bath</span>
        </div>
        <div className="area">
          <span>
            <LiaDirectionsSolid />
          </span>
          <span>{area} Area</span>
        </div>
      </div>
      <div className="emi-more">
        <div>
          <span className="price">${emi}</span> /month
        </div>
        <button>Read More</button>
      </div>
      <div className="rent-wishlist">
        <button>For Rent</button>
        <span>
          <AiOutlineHeart />
        </span>
      </div>
    </div>
  );
}
