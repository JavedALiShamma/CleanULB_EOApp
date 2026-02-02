// CardCarousel.js
import React from "react";
import { Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import googleMapLocations from "../../assets/icons/googleMapLocations.png"
import cleaningBins from "../../assets/icons/cleaningBins.png"
import complaint from "../../assets/icons/complaint.png"
import publicPlaceCleanling from "../../assets/icons/publicPlaceCleanling.png"
import gvpCleaning from "../../assets/icons/GVP Cleanling.png"
const cardData = [
  {
    title: "Auto-Tipper Tracking",
    img: googleMapLocations,
    desc: "ULB can Locate the exact location of grabage collection vehicles , wards it covered and total distance traveled by the auto tipper's with in the ULB and collective reports of distance travelled and wards covered send to the Municpality by email ",
  },
  {
    title: "Cleaning of Garbage Bins ",
    img: cleaningBins,
    desc: "Monitoring of garbage bin with before and after pictures , real time photos can be seen in the municpality dashboard",
  },
  {
    title: "Citizen Grievance Redressal ",
    img: complaint,
    desc: "Citizen can register a complaint using citizen mobile application and complaint is directly tranfered to the municiplaity Officer and  Officer will resolve it and complaints can been in Municiplaity dashboard as well",
  },
  {
    title: "Monitoring cleanliness of Public places",
    img: publicPlaceCleanling,
    desc: "Cleanliness of important places in the muncipality through Clean ULB software where muncipality can see before and after photos of the important places and can be monitored through dashboard",
  },
  {
    title:"GVP & CTU Monitoring",
    img:gvpCleaning,
    desc:"Monitoring of Garbage Vulnerable Point by uploading before and after pictures of the GVP/CTU and that can be monitored from municipality dashboard "
  }
];

const CardCarousel = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Scope of work</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 }, // mobile
          768: { slidesPerView: 2 }, // tablet
          992: { slidesPerView: 3 }, // desktop
        }}
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <Card className="custom-card h-100 shadow-sm">
              <Card.Img variant="top" src={card.img} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.desc}</Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .custom-card {
          border-radius: 15px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .custom-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default CardCarousel;
