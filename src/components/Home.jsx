import axios from "axios";
import "../style/style.scss";
import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import { useNavigate } from "react-router-dom";
import Placeholder from "./Placeholder";
import Card from "./Card";
import Modal from "./Modal";

const Home = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [search, setSearch] = useState([]);

  const handleChange = e => {
    setSearch(e.target.value);
  };
  const handlePress = e => {
    if (e.key === "Enter") {
      navigate(`/search/${search}`);
    }
  };
  const closeModal = () => {
    setModal(false);
  };
  const openModal = info => {
    setModal(true);
    setModalInfo(info);
  };

  useEffect(() => {
    axios
      .get(
        `${API_URL}/search/photos/?client_id=${API_KEY}&per_page=9&order_by=latest&query=forest`
      )
      .then(res => {
        const data = res.data.results;
        setImageData(data);
      })
      .catch(err => {
        console.log({err:"API not responding"});
      });
  }, []);

  return (
    <>
      {/* Image Modal */}
      {modal && <Modal closeModal={closeModal} info={modalInfo} />}

      {/* Home Header */}
      <div className="header">
        <span className="wrapper">
          {" "}
          <i className="fas fa-search"> </i>{" "}
          <input
            type="text"
            placeholder="Search for photo"
            value={search}
            onChange={handleChange}
            onKeyPress={handlePress}
          />
        </span>
      </div>

      {/* Conditional for Content */}
      {imageData && (
        <div className="grid column-sm">
          {imageData &&
            imageData.map((image, index) => (
              <Card
                key={index}
                openModal={openModal}
                image={image.urls.raw}
                location={image.user.location}
                name={image.user.name}
              />
            ))}
        </div>
      )}

      {/* Conditional for Placeholders */}
      {!imageData && (
        <div className="grid column-sm">
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
      )}
    </>
  );
};

export default Home;
