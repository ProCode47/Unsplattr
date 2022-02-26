import { useEffect, useState } from "react";

const Card = ({ image, location, name, openModal }) => {
  const [tileValue, setTileValue] = useState(null);

  useEffect(() => {
    const tileSize = [1, 2, 3, 4];
    setTileValue(tileSize[Math.floor(Math.random() * tileSize.length)]);
  }, []);

  return (
    <>
      <div
        className={`size${tileValue} item item-sm`}
        onClick={() => openModal({ image, name, location })}
      >
        <div className="overlay"></div>
        <img
          className="image"
          src={`${image}&w=300&h=350&fit=crop`}
          alt="unsplash"
        />
        <span className="text">
          {" "}
          <h2>{name}</h2>
          <h4> {location}</h4>{" "}
        </span>
      </div>
    </>
  );
};

export default Card;
