import React, { useEffect, useState } from "react";
import "./main.css";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../../store/dataSlice";
import { useNavigate, Link } from "react-router-dom";

import { BiSolidHourglassTop } from "react-icons/bi";
export default function Main({ ProductCard }) {
  const [more, setMore] = useState(6);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  const propertyData = data.slice(0, more);

  useEffect(() => {
    dispatch(dataActions.filterData("London"));
    // navigate(`/property/London`);
  }, []);

  return (
    <div className="main-container">
      <div className="product-container">
        {propertyData.map((item, index) => {
          console.log("hjbhjb", item);
          return (
            <Link
              to={`/property/${item.id}`}
              state={item}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ProductCard item={item} key={index} />
            </Link>
          );
        })}
      </div>
      <div className="show-more">
        <button onClick={() => setMore(more + 3)}>
          <BiSolidHourglassTop className="hourglass" />
          Show more
        </button>
      </div>
    </div>
  );
}
