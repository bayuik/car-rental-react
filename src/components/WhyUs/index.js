import { Container, Row } from "react-bootstrap";
import CardItem from "./CardItem";

const WhyUs = () => {
  return (
    <Container>
      <Row className="mb-4">
        <h1 className="fw-bold mb-3">Why Us?</h1>
        <p>Mengapa harus pilih Binar Car Rental?</p>
      </Row>
      <Row>
        <CardItem img="images/icon_complete.png" title="Mobil Lengkap" text="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat" />
        <CardItem img="images/icon_price.png" title="Harga Murah" text="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain" />
        <CardItem img="images/icon_24hrs.png" title="Layanan 24 Jam" text="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu" />
        <CardItem img="images/icon_professional.png" title="Sopir Profesional" text="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu" />
      </Row>
    </Container>
  );
};

export default WhyUs;
