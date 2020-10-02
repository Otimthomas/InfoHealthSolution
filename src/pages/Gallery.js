import React from "react";
import "./Gallery.css";
import data from "../data/data";
import Modal from "../components/Modal";

function Gallery() {
  const [selectedImg, setSelectedImg] = React.useState(null);
  return (
    <>
      <div className='gallery'>
        {data.map((item) => (
          <div
            className='gallery__wrap'
            key={item.key}
            onClick={() => setSelectedImg(item.img)}>
            <img className='gallery__img' src={item.img} alt={`${item.id}`} />
          </div>
        ))}
        {selectedImg && (
          <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
        )}
      </div>
    </>
  );
}

export default Gallery;
