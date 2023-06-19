import React, { useState, useEffect } from "react";
import { Backdrop, IconButton } from "@mui/material";
import styled from "styled-components";

import prod1 from "../../Assets/pd1.jpg";
import prod2 from "../../Assets/pd2.jpg";
import prod3 from "../../Assets/pd3.png";
import prod4 from "../../Assets/pd4.jpg";

import thumb1 from "../../Assets/pd1.jpg";
import thumb2 from "../../Assets/pd2.jpg";
import thumb3 from "../../Assets/pd3.png";
import thumb4 from "../../Assets/pd4.jpg";

import CloseIcon from "./Icons/CloseIcon";
import PreviousIcon from "./Icons/PreviousIcon";
import NextIcon from "./Icons/NextIcon";

const IMAGES = [prod1, prod2, prod3, prod4];
const THUMBS = [thumb1, thumb2, thumb3, thumb4];
const BackdropGallery = ({ open, handleClose, currentPassedImage }) => {
  const [backdropImage, setBackdropImage] = useState(currentPassedImage);
  const [currentPassedImageIndex, setCurrentPassedImageIndex] = useState(1);

  useEffect(() => {
    setBackdropImage(currentPassedImage);
    IMAGES.forEach((imgg, index) => {
      imgg === currentPassedImage && setCurrentPassedImageIndex(index);
    });
  }, [currentPassedImage]);

  const handleClick = (index = null) => {
    setBackdropImage(IMAGES[index]);
    setCurrentPassedImageIndex(index);
  };

  const handleIncrement = () => {
    if (currentPassedImageIndex === IMAGES.length - 1) {
      setBackdropImage(IMAGES[0]);
      setCurrentPassedImageIndex(0);
    } else {
      setBackdropImage(IMAGES[currentPassedImageIndex + 1]);
      setCurrentPassedImageIndex(currentPassedImageIndex + 1);
    }
  };

  const handleDecrement = () => {
    if (currentPassedImageIndex === 0) {
      setBackdropImage(IMAGES[IMAGES.length - 1]);
      setCurrentPassedImageIndex(IMAGES.length - 1);
    } else {
      setBackdropImage(IMAGES[currentPassedImageIndex - 1]);
      setCurrentPassedImageIndex(currentPassedImageIndex - 1);
    }
  };

  const removeActivatedClass = (parent) => {
    parent.childNodes.forEach((node) => {
      node.childNodes[0].classList.contains("activated") &&
        node.childNodes[0].classList.remove("activated");
    });
  };

  const BackdropContent = styled.section`
      width: 415px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  `
const BackdropContentImg = styled.div`
  position: relative;

`

const BackdropThumbnails = styled.div`
  position: relative;

`
const BackdropThumbnailsImghol = styled.div`
  height: 75px;
  width: 75px;
  position: relative;

`
const BackdropThumbnailsImg = styled.img`
  height: 75px;

`

  return (
    <Backdrop
      className="backdrop"
      sx={{
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <BackdropContent>
        <IconButton
          onClick={handleClose}
          sx={{ color: "#fff", bgcolor: "transparent", alignSelf: "flex-end" }}
        >
          <CloseIcon fillColor={"#fff"} />
        </IconButton>
        <BackdropContentImg>
          <IconButton
            className="icon-button-prev"
            disableRipple
            onClick={() => {
              handleDecrement();
              removeActivatedClass(document.querySelector(".thumbnails"));
            }}
            sx={{
              height: "42px",
              width: "42px",
              bgcolor: "#fff",
              position: "absolute",
              left: "-21px",
              top: "50%",
              transform: "translateY(-50%)"
            }}
          >
            <PreviousIcon />
          </IconButton>
          <IconButton
            className="icon-button-next"
            disableRipple
            onClick={() => {
              handleIncrement();
              removeActivatedClass(document.querySelector(".thumbnails"));
            }}
            sx={{
              height: "42px",
              width: "42px",
              bgcolor: "#fff",
              position: "absolute",
              right: "-21px",
              top: "50%",
              transform: "translateY(-50%)"
            }}
          >
            <NextIcon />
          </IconButton>
          <img
            src={backdropImage}
            alt="selected-product"
            style={{ cursor: "auto" }}
          />
        </BackdropContentImg>
        <BackdropThumbnails>
          {THUMBS.map((th, index) => {
            return (
              <BackdropThumbnailsImghol
                key={index}
                onClick={(e) => {
                  handleClick(index);
                  removeActivatedClass(e.currentTarget.parentNode);
                  e.currentTarget.childNodes[0].classList.toggle("activated");
                }}
              >
                <div
                  className={`outlay ${
                    index === currentPassedImageIndex && "activated"
                  }`}
                ></div>
                <BackdropContentImg src={th} alt={`product-${index + 1}`} />
              </BackdropThumbnailsImghol>
            );
          })}
        </BackdropThumbnails>
      </BackdropContent>
    </Backdrop>
  );
};

export default BackdropGallery;
