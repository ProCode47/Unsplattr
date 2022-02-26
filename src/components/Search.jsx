import axios from "axios";
import "../style/style.scss";
import { API_KEY, API_URL } from "../config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Modal from "./Modal";
import Placeholder from "./Placeholder";
import Footer from "./Footer";


const Search = props => {
  const [imageData, setImageData] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);
  const [search, setSearch] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    setSearch(query);

    axios
      .get(
        `${API_URL}/search/photos/?client_id=${API_KEY}&per_page=9&order_by=latest&query=${query}`
      )
      .then(res => {
        const data = res.data.results;
        setImageData(data);
      })
      .catch(err => {
        console.log({err:"API not responding"});
      });
  }, [query]);

  const closeModal = () => {
    setModal(false);
  };
  const openModal = info => {
    setModal(true);
    setModalInfo(info);
  };

  return (
    <>
      {/* Image Modal */}
      {modal && <Modal closeModal={closeModal} info={modalInfo} />}

      {/* Conditional for Placeholders */}
      {!imageData && (
        <>
          {" "}
          <div className="header search">
            <h1 className="search-heading">
              {" "}
              Searching for <b>"{search}"</b>
            </h1>
          </div>
          <div className="grid column-sm">
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </div>{" "}
        </>
      )}

      {/* Conditional for Content */}
      {imageData && (
        <>
          <div className="header search header-sm">
            <h1 className="search-heading wrapper-sm">
              {" "}
              Search Results for <b>"{search}"</b>
            </h1>
          </div>
          <div className="grid column-sm">
            {imageData.map((image, index) => (
              <Card
                key={index}
                image={image.urls.raw}
                location={image.user.location}
                name={image.user.name}
                openModal={openModal}
              />
            ))}
          </div>
        </>
      )}
      <Footer/>
    </>
  );
};

export default Search;
