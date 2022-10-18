import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Section from "components/Section";

function Footer(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className="footer"
    >
      <Container fluid="lg">
        <Row>
          <Col>
            <Link href="/">
              <a>
                <div>
                  <img
                    className="FooterComponent__logo"
                    src={props.logo}
                    alt="Logo"
                  />
                </div>
              </a>
            </Link>

            {props.description && (
              <p className="FooterComponent__description">
                {props.description}
              </p>
            )}

            <p className="FooterComponent__copyright">
              {props.copyright}
              <Link href="/legal/terms-of-service">
                <a>Terms</a>
              </Link>
              <Link href="/legal/privacy-policy">
                <a>Privacy</a>
              </Link>
            </p>
          </Col>
          <Col md={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <div className="FooterComponent__menus">
            <h5>Services</h5>
              <Row>
                <Col xs={12} md={3} className="mt-3 mt-md-0">
                  <ul className="list-unstyled">
                      <li className="FooterComponent__footer-service-item">
                        <Link href="#">
                          <a>Cerec Technology</a>
                        </Link>
                      </li>
                      <li className="FooterComponent__footer-service-item">
                        <Link href="#">
                          <a>Bridges</a>
                        </Link>
                      </li>
                      <li className="FooterComponent__footer-service-item">
                        <Link href="#">
                          <a>Implants</a>
                        </Link>
                      </li>
                      <li className="FooterComponent__footer-service-item">
                        <Link href="#">
                          <a>Sleep Appliances</a>
                        </Link>
                      </li>
                    </ul>
                </Col>

                <Col xs={12} md={3} className="mt-3 mt-md-0">
                <ul className="list-unstyled">
                        <li className="FooterComponent__footer-service-item">
                          <Link href="#">
                            <a>Whitening</a>
                          </Link>
                        </li>
                        <li className="FooterComponent__footer-service-item">
                          <Link href="#">
                            <a>Invisalign Ortho Aligners</a>
                          </Link>
                        </li>
                        <li className="FooterComponent__footer-service-item">
                          <Link href="#">
                            <a>Hygiene Therapy</a>
                          </Link>
                        </li>
                    </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Footer;
