import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";

import { dataActions } from "../../store/dataSlice";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cities = ["New York", "Mumbai", "Paris", "London"];
  const activecity = useSelector((state) => state.data.activecity);

  const handleClick = (c) => {
    console.log(c);
    dispatch(dataActions.filterData(c));
    // navigate(`/property/${c}`);
  };
  return (
    <section>
      <div className="header-container">
        <div className="title-desc">
          <h2 className="title">Featured Listed Property</h2>
          <p className="desc">
            Real estate can be bought, sold, leased, or rented and can be a
            valueable investment oppertunity. The valueof real estate can be...
          </p>
        </div>
        <div className="pagination">
          <div className="cities">
            {cities.map((c, i) => (
              <button
                className={activecity === c ? "active" : ""}
                key={i}
                onClick={() => handleClick(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="view-all">
            <button>
              <span className="view">View All</span>

              <HiArrowLongRight className="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
