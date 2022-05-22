import { Col, Container, Row, Table } from "react-bootstrap";

const Services = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <img src="/images/img_service.png" alt="Service" />
          </Col>
          <Col>
            <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
            <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <table>
              <tr>
                <td>
                  <img src="images/tick.png" alt="tick" />
                </td>
                <td>Sewa Mobil Dengan Supir di Bali 12 Jam</td>
              </tr>
              <tr>
                <td>
                  <img src="images/tick.png" alt="tick" />
                </td>
                <td>Sewa Mobil Lepas Kunci di Bali 24 Jam</td>
              </tr>
              <tr>
                <td>
                  <img src="images/tick.png" alt="tick" />
                </td>
                <td>Sewa Mobil Jangka Panjang Bulanan</td>
              </tr>
              <tr>
                <td>
                  <img src="images/tick.png" alt="tick" />
                </td>
                <td>Gratis Antar - Jemput Mobil di Bandara</td>
              </tr>
              <tr>
                <td>
                  <img src="images/tick.png" alt="tick" />
                </td>
                <td>Layanan Airport Transfer / Drop In Out</td>
              </tr>
            </table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
