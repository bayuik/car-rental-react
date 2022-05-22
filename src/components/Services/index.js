import { Col, Container, Row } from "react-bootstrap";
import { serviceLists } from "./serviceLists";
const Services = () => {
  return (
    <Container className="mb-section">
      <Row>
        <Col>
          <img src="/images/img_service.png" alt="Service" />
        </Col>
        <Col>
          <h3 className="fw-bold mb-4 mt-5">Best Car Rental for any kind of trip in (Lokasimu)!</h3>
          <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
          <table>
            <tbody>
              {serviceLists.map((service, id) => {
                return (
                  <tr key={id}>
                    <td>
                      <img src="/images/tick.png" alt="tick" />
                    </td>
                    <td>{service}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
