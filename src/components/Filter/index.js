import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCar, filterCars } from "../../features/carsSlice";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Filter = () => {
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

  const [inputs, setInputs] = useState({
    driver: "",
    date: "",
    time: "",
    capacity: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterCars(inputs));
  };

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container className="shadow p-4 bg-body filter-container">
      <Row>
        <Col md={3}>
          <p>Tipe Driver</p>
          <Form.Select onChange={handleChange} name="driver" >
            <option>Pilih Tipe Driver</option>
            <option value="withDriver">Dengan Sopir</option>
            <option value="withoutDriver">Tanpa Sopir (Lepas Kunci)</option>
          </Form.Select>
        </Col>
        <Col>
          <p>Tanggal</p>
          <Form.Control type="date" placeholder="Pilih Tanggal" onChange={handleChange} name="date" />
        </Col>
        <Col>
          <p>Waktu Jemput/Ambil</p>
          <Form.Control type="time" placeholder="Pilih Waktu" onChange={handleChange} name="time" />
        </Col>
        <Col md={3}>
          <p>Jumlah Penumpang (optional)</p>
          <Form.Control type="number" placeholder="Jumlah Penumpang" onChange={handleChange} name="capacity" />
        </Col>
        <Col md={2} className="mt-auto">
          <Button variant="success" onClick={handleSubmit}>
            Cari Mobil
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Filter;
