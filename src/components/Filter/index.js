import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCar, filterCars } from "../../features/carsSlice";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Filter = () => {
  const dispatch = useDispatch();

  const getData = () => {
    axios
      .get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json")
      .then((res) => {
        dispatch(addCar(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const initialValue = {
    driver: "",
    date: "",
    time: "",
    capacity: 0,
  };

  const [inputs, setInputs] = useState(initialValue);

  const handleSubmit = () => {
    if(JSON.stringify(inputs) === JSON.stringify(initialValue)) {
      getData();
    } else {
      dispatch(filterCars(inputs));
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "capacity" && (e.target.value < 0 || e.target.value === "")) {
      setInputs({
        ...inputs,
        [e.target.name]: 0,
      });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <Container className="shadow p-4 bg-body filter-container">
      <Row>
        <Col md={3}>
          <p>Tipe Driver</p>
          <Form.Select onChange={handleChange} name="driver" value={inputs.driver}>
            <option>Pilih Tipe Driver</option>
            <option value="withDriver">Dengan Sopir</option>
            <option value="withoutDriver">Tanpa Sopir (Lepas Kunci)</option>
          </Form.Select>
        </Col>
        <Col>
          <p>Tanggal</p>
          <Form.Control type="date" placeholder="Pilih Tanggal" onChange={handleChange} name="date" value={inputs.date} />
        </Col>
        <Col>
          <p>Waktu Jemput/Ambil</p>
          <Form.Control type="time" placeholder="Pilih Waktu" onChange={handleChange} name="time" value={inputs.time} />
        </Col>
        <Col md={3}>
          <p>Jumlah Penumpang (optional)</p>
          <Form.Control type="number" placeholder="Jumlah Penumpang" onChange={handleChange} name="capacity" min="0" />
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
