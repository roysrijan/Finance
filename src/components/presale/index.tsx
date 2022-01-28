
import { useState } from 'react';
import { Col, Button, Table } from 'react-bootstrap';

export default function Presale() {
    const [tab, setTab] = useState('BUY')
    return (
        <Col lg="5">
            <div className="presale">
                <div className="buy__tab">

                    <button className={"tab__type " + (tab == 'BUY' ? "activeType" : "")} onClick={() => setTab('BUY')}>Buy</button>
                    <button className={"tab__type " + (tab == 'SELL' ? "activeType" : "")} onClick={() => setTab('SELL')}>Sell</button>

                </div>
                <div className="calculator-box">
                    <div className="tab__typecontent">
                        <h3>&nbsp;</h3>
                        <div className="tab__form" style={{marginBottom: "35px"}}>
                            <p>You Buy</p>
                            <div className="form__entry">
                                <input type="text" id="qttinputid" value="1" />
                                    <div className="wrapper__coin">
                                        <div className="select_wrap ">
                                            <ul className="default_option">
                                                <li>
                                                    <div className="option pizza">
                                                        <div className="icon">
                                                            <img loading="lazy" className="img-fluid crypt-imgp" src="https://d33epyjwhmr3r5.cloudfront.net/cms/images/currency/blueCircle/maha.svg" alt="MAHA" width="25px" height="25" />
                                                        </div>
                                                        &nbsp;FINO
                                                    </div>
                                                </li>

                                            </ul>




                                        </div>

                                    </div>
                            </div>
                        </div>
                        <div className="tab__form" style={{marginBottom: "18px"}}>
                            <p>You Spend</p>
                            <div className="form__entry">
                                <input type="text" value="300" readOnly />
                                    <div className="wrapper__coin">
                                        <div className="select_wrap">
                                            <ul className="default_option">
                                                <li>
                                                    <div className="option pizza">
                                                        <div className="icon">
                                                            <img loading="lazy" height="25" width="25" className="img-fluid crypt-imgp" src="https://d33epyjwhmr3r5.cloudfront.net/assets/images/currency/inr.png" alt="INR" />
                                                        </div>
                                                        INR
                                                    </div>
                                                </li>
                                            </ul>

                                        </div>

                                    </div>
                            </div>
                        </div>
                        <button id="affiliate-download" className="cta__btn">{tab} FINO (INR) NOW </button>
                    </div>
                </div>
            </div>
        </Col>
    )
}