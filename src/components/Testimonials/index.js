import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import SlideItem from "./SlideItem";
import { testimonials } from "./testimonials";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <Container className="mb-section">
      <Row className="text-center">
        <h3 className="fw-bold">Testimonial</h3>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </Row>
      <Row>
        <Swiper slidesPerView={"auto"} slideToClickedSlide={true} centeredSlides={true} spaceBetween={30} navigation={true} loop={true} className="mySwiper">
          {testimonials.map((item, id) => {
            return (
              <SwiperSlide key={id}>
                <SlideItem {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Row>
      <Row>
        <Col className="text-center mt-5">
          <FaAngleLeft className="rounded-circle border p-1 iconArrow mx-2" />

          <FaAngleRight className="rounded-circle border p-1 iconArrow mx-2" />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
