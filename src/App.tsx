import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Table,
} from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="mainWrap">
      <div className="header">
        <Container fluid>
          <Row>
            <Col lg="12">
              <Navbar bg="dark" expand="lg" fixed="top">
                <Container fluid>
                  <Navbar.Brand href="/">
                    {/* <img src="/images/logo.png" alt="Spaceshift" /> */}
                    <h2 className="comname">Company name</h2>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" className="navBarTop">
                    <Nav className="me-auto">
                      <Nav.Link href="/">00.25</Nav.Link>

                      <Nav.Link href="/contactus">Connect wallet</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="body-content">
        <Container fluid>
          <Row>
            <Col lg="2">
              <div className="left-nav">
                <ul>
                  <li>
                    <a href=""><i className="fa fa-home" aria-hidden="true"></i>Home</a>
                  </li>
                  <li>
                    <a href=""><i className="fa fa-adjust" aria-hidden="true"></i>Stake</a>
                  </li>
                  <li>
                    <a href=""><i className="fa fa-list-alt" aria-hidden="true"></i>Todo</a>
                  </li>
                  <li>
                    <a href=""><i className="fa fa-share-square-o" aria-hidden="true"></i>Social</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="7">
              <div className="market-cap-statistic-wrapper">
                <div className="marketcap">
                  <div className="market-cap-option">
                    <span>
                      <i className="fa fa-line-chart" aria-hidden="true"></i>
                      <p>Market cap</p>
                    </span>
                    <div className="box">$1452555</div>
                  </div>

                  <div className="market-cap-option">
                    <span>
                    <i className="fa fa-area-chart" aria-hidden="true"></i>
                      <p>APY statistic</p>
                    </span>
                    <div className="box">45852.22%</div>
                  </div>

                  <div className="market-cap-option">
                    <span>
                    <i className="fa fa-superpowers" aria-hidden="true"></i>
                      <p>Next rebase</p>
                    </span>
                    <div className="box">00:25:00</div>
                  </div>
                </div>

                <div className="staking-wrap">
                  <h2>Staking statistic</h2>
                  <div className="staking-table">
                    <Table striped  hover variant="dark">
                      <thead>
                        <tr>
                          <th>
                            Current APY
                          </th>
                          <th>
                             102 452.58%
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Your wallet balance :</td>
                          <td>0</td>
                        </tr>

                        <tr>
                          <td>Next reward balanace :</td>
                          <td>0</td>
                        </tr>

                        <tr>
                        <td>Next reward yeild :</td>
                          <td>0</td>
                        </tr>
                        <tr>
                        <td>ROI :</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="3">
<div className="calculator">
  <h2>calculator</h2>
  <div className="calculator-box">
    <h3>Estimate your returns</h3>
    <div className="returns">
      254585
    </div>

    <div className="days-wrap">
      <span>7 Days</span>
      <span className="active">1 Month</span>
      <span>6 Months</span>
      <span>1 Year</span>
    </div>
    <div className="bal-box-g">
     <h4>$Titano balance</h4>
     <h5>55,856,56,61.56</h5>
    </div>
    <div className="bal-box-g">
     <h4>$Total USD balance</h4>
     <h5>55,856,56,61.56</h5>
    </div>
    <p className="rwt">Vivamus suscipit tortor eget felis porttitor volutpa</p>
    <div className="fgh"><Button variant="secondary" size="sm" className="bh-bt">Suscipit Tortor</Button></div>
    
  </div>
</div>
              </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
