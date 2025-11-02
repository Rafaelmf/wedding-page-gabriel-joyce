import { Carousel, Image } from "antd";
import "./Carousel.scss";

const CarouselPhotos = () => {
  return (
    <div className="carouselDiv">
      <Carousel autoplay dots={{ className: "dotsCarrousel" }}>
        <div className={"contentStyle"}>
          <Image
            width="100%"
            preview={false}
            height="100%"
            src="./carousel-photos/image4.jpg"
          />
        </div>
        <div className={"contentStyle"}>
          <Image
            width="100%"
            preview={false}
            height="100%"
            src="./carousel-photos/image6.jpg"
          />
        </div>
        <div className={"contentStyle"}>
          <Image
            width="100%"
            preview={false}
            height="100%"
            src="./carousel-photos/image1.jpg"
          />
        </div>
        <div className={"contentStyle"}>
          <Image
            width="100%"
            preview={false}
            height="100%"
            src="./carousel-photos/image3.jpg"
          />
        </div>
        <div className={"contentStyle"}>
          <Image
            width="100%"
            preview={false}
            src="./carousel-photos/image7.jpg"
          />
        </div>
        <div className={"contentStyle"}>
          <Image
            width="100%"
            preview={false}
            src="./carousel-photos/image2.jpg"
          />{" "}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPhotos;
