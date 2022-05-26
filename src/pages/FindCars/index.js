import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header, Hero, Filter, CarFrame, Footer } from "../../components";
import { addCar } from "../../features";

const FindCars = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json")
      .then((res) => {
        dispatch(addCar(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);
  return (
    <>
      <Header />
      <Hero />
      <Filter />
      <CarFrame />
      <Footer />
    </>
  );
};

export default FindCars;
