import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

function Placeholder() {
  const [tileValue, setTileValue] = useState(null);

  useEffect(() => {
    const tileSize = [1, 2, 3, 4];
    setTileValue(tileSize[Math.floor(Math.random() * tileSize.length)]);
  }, []);

  return (
    <>
      <div className={`size${tileValue} item load-card`}>
        <ContentLoader
          speed={1}
          width={`100%`}
          height={`100%`}
          viewBox="0 0 100% 100%"
          backgroundColor="#6D7B91"
          foregroundColor="#ecebeb"
        >
          <rect x="10" y="76%" rx="3" ry="3" width="60%" height="6%" />
          <rect x="10" y="85%" rx="3" ry="3" width="28%" height="6%" />
        </ContentLoader>
      </div>
    </>
  );
}

export default Placeholder;
