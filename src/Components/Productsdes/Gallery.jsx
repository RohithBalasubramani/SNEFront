import React, { useState, useEffect } from "react";
import BackdropGallery from "./BackdropGallery";
import styled from "styled-components";

import prod1 from "../../Assets/pd1.jpg";
import prod2 from "../../Assets/pd2.jpg";
import prod3 from "../../Assets/pd3.png";
import prod4 from "../../Assets/pd4.jpg";

import thumb1 from "../../Assets/pd1.jpg";
import thumb2 from "../../Assets/pd2.jpg";
import thumb3 from "../../Assets/pd3.png";
import thumb4 from "../../Assets/pd4.jpg";

const IMAGES = [prod1, prod2, prod3, prod4];
const THUMBS = [thumb1, thumb2, thumb3, thumb4];

const GallerySty = styled.section`
    flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

`

const GalleryImg = styled.img`
  height: 415px;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 992px) {
    height: 350px;
  }

`

const GalleryThumb = styled.div`
  position: relative;
  height: 90px;
  width: 90px;


`
const GalleryThumbImgHol = styled.div`
  position: relative;
  height: 90px;
  width: 90px;
  transform: rotateZ(-90deg);

  @media (max-width: 992px) {
    height: 75px;
    width: 75px;
  }

`


const GalleryThumbImg = styled.img`
  height: 90px;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 992px) {
    height: 75px;
    padding: 10%;
  }

`


const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(prod1);
  const [currentPassedImage, setCurrentPassedImage] = useState(prod1);

  const [open, setOpen] = useState(false);
  const handleClick = (index) => {
    setCurrentImage(IMAGES[index]);
  };
  const handleToggle = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const removeActivatedClass = (parent) => {
    parent.childNodes.forEach((node) => {
      node.childNodes[0].classList.contains("activated") &&
        node.childNodes[0].classList.remove("activated");
    });
  };
  useEffect(() => {
    setCurrentPassedImage(currentImage);
  }, [currentImage]);

  return (
    <section className="gallery-holder hide-in-mobile">
      <GallerySty>
        
          <GalleryImg src={currentImage} alt="product-1" onClick={handleToggle} />
        
        <BackdropGallery
          handleClose={handleClose}
          open={open}
          currentPassedImage={currentPassedImage}
        />
        <GalleryThumb>
          {THUMBS.map((th, index) => {
            return (
              <GalleryThumbImgHol
                key={index}
                onClick={(e) => {
                  handleClick(index);
                  removeActivatedClass(e.currentTarget.parentNode);
                  e.currentTarget.childNodes[0].classList.toggle("activated");
                }}
              >
                <div className={`outlay ${index === 0 && "activated"}`}></div>
                
                <GalleryThumbImg src={th} alt={`product-${index + 1}`} />
              </GalleryThumbImgHol>
            );
          })}
        </GalleryThumb>
      </GallerySty>
    </section>
  );
};

export default Gallery;
