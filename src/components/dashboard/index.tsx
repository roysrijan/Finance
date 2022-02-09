import { Col, Button, Table } from 'react-bootstrap';
import calculatorIcon from "../../img/calculator.png";
import kone from "../../img/kone.png";
export default function Dashboard() {
    return (
        <>
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
                            <div className="box">45852.22%
                            <img src={kone} style={{"width": "20px", height: "21px"}} alt="" />
                            </div>
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
                        <div className="staking-box">
                            <div className="top-col">
                            <h2> Current APY</h2>
                            <h3> 102 452.58%</h3>
                            </div>

                            <div className="cont-col">
                                <span>Your wallet balance :</span>
                                <span>0</span>
                            </div>

                            <div className="cont-col">
                                <span>Next reward balanace :</span>
                                <span>0</span>
                            </div>
                            <div className="cont-col">
                                <span>Next reward yeild :</span>
                                <span>0.000458%</span>
                            </div>
                            <div className="cont-col">
                                <span>ROI :</span>
                                <span className="roi-val">0.0058%</span>
                            </div>

                            {/* <Table striped hover variant="dark">
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
                            </Table> */}
                        </div>
                    </div>
                </div>
            </Col>

            <Col lg="3">
                <div className="calculator">
                    <h2> <img src={calculatorIcon} style={{"width": "20px", height: "21px"}} alt="" />calculator</h2>
                    <div className="calculator-box">
                        <h3>Estimate your returns</h3>
                        <input type="text" className="returns" />


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
                            <h5 className='totalBal'>55,856,56,61.56</h5>
                        </div>
                        <p className="rwt">Vivamus suscipit tortor eget felis porttitor volutpa</p>
                        <div className="fgh"><Button variant="secondary" size="sm" className="bh-bt">Suscipit Tortor</Button></div>

                    </div>
                </div>
            </Col>
        </>
    )
}