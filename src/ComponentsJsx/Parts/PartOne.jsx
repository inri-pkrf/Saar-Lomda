import React, { useState } from 'react';
import HeaderParts from './HeaderParts';
import DropBtn from './DropBtn';
import carouselData from './carouselData';
import '../../ComponentsCss/Parts/PartOne.css';
import { useNavigate } from 'react-router-dom';

function PartOne() {
  const navigate = useNavigate();
  
  const buttonLabels = [
    'גורמים לאירוע הרס',
    'סוגי קריסות מרכזיות',
    'רמות נזק'
  ];

  // Split carousel data by button: [4, 5, 4] images
  const imagesPerButton = [
    carouselData.slice(0, 4),    // Button 1: images 0-3
    carouselData.slice(4, 9),    // Button 2: images 4-8
    carouselData.slice(9, 13)    // Button 3: images 9-12
  ];

  const [currentSlide, setCurrentSlide] = useState([0, 0, 0]);
  const [completed, setCompleted] = useState([false, false, false]);
  const [active, setActive] = useState(null);

  const handlePrev = (index) => {
    const buttonImages = imagesPerButton[index];
    setCurrentSlide((prev) => {
      const next = [...prev];
      next[index] = Math.max(next[index] - 1, 0);
      return next;
    });
    setCompleted((prev) => {
      const next = [...prev];
      next[index] = currentSlide[index] - 1 === buttonImages.length - 1;
      return next;
    });
  };

  const handleNext = (index) => {
    const buttonImages = imagesPerButton[index];
    setCurrentSlide((prev) => {
      const next = [...prev];
      next[index] = Math.min(next[index] + 1, buttonImages.length - 1);
      return next;
    });
    setCompleted((prev) => {
      const next = [...prev];
      const nextSlide = Math.min(currentSlide[index] + 1, buttonImages.length - 1);
      next[index] = nextSlide === buttonImages.length - 1;
      return next;
    });
  };

  return (
    <div
      className="partone-root"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Img/Bg-allTheApp.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <HeaderParts
        title="חזרה על תורה לחילוץ לכוד"
      />

      <div className="partone-list">
        {buttonLabels.map((label, index) => (
          <div className={`partone-item ${active === index ? 'active' : ''}`} key={label}>
            <DropBtn
              label={label}
              onClick={() => setActive(index === active ? null : index)}
              isActive={active === index}
              images={imagesPerButton[index]}
              currentSlide={currentSlide[index]}
              onPrev={() => handlePrev(index)}
              onNext={() => handleNext(index)}
            />
          </div>
        ))}
      </div>
      <button className='next-topic-btn' onClick={() => navigate("/Menu")}>
        <img src={`${process.env.PUBLIC_URL}/Img/nextTopic-btn.png`} alt="nextTopic" className='next-btn-icon'/>
        <span>לנושא הבא</span>
      </button>
    </div>
  );
}

export default PartOne;