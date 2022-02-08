
import { useState } from 'react';
import { Col, Button, Table } from 'react-bootstrap';
import logo from '../../Fino_logo.png';
import { useWeb3ExecuteFunction } from 'react-moralis';

export default function Presale() {
    const [tab, setTab] = useState('BUY')
    const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction();
    const options = {
        abi: [{"inputs":[{"internalType":"uint256","name":"_finosPerBnb","type":"uint256"},{"internalType":"uint256","name":"_finoPerBusd","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_user","type":"address"}],"name":"LogUserAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"weiAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"TokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"weiAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"TokenTransfer","type":"event"},{"inputs":[],"name":"CROWDSALE_START_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FinosPerBnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FinosPerBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_CONTRIBUTION_BNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_CONTRIBUTION_BUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_CONTRIBUTION_BNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_CONTRIBUTION_BUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activateClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_finoToken","type":"address"}],"name":"addTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"busdToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newRate","type":"uint256"}],"name":"changeFinoBnbRate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contributionsInBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contributionsInBUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"finoToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"getTokenCountForUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openSaleForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purchaseFINOTokensInBNB","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_busdAmount","type":"uint256"}],"name":"purchaseFINOTokensInBUSD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleOnForPublic","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"takeOutFundingRaised","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"takeOutRemainingTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"weiRaisedBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weiRaisedBUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}],
        contractAddress: '0x101FD282056ba6a536de34EeD9e4f939cf03F348',
        functionName: "purchaseFINOTokensInBNB",
        params: {
          secondsAgos: [1, 10],
        }
      };
    const [bal, setBal] = useState(0);
    const [chan, setChan] = useState();
    
    return (
        <Col lg="5">
            <div className="presale">
                {/* <div className="buy__tab">

                    <button className={"tab__type " + (tab == 'BUY' ? "activeType" : "")} onClick={() => setTab('BUY')}>Buy</button>
                    <button className={"tab__type " + (tab == 'SELL' ? "activeType" : "")} onClick={() => setTab('SELL')}>Sell</button>

                </div> */}
                <div className="calculator-box">
                    <div className="tab__typecontent">
                        <div className="tab__form" style={{marginBottom: "5px"}}>
                            <p>You Spend</p>
                            <div className="form__entry">
                                <input type="text" defaultValue="0" onChange={(e: any)=>setBal(e.target.value)}/>
                                    <div className="wrapper__coin">
                                        <div className="select_wrap">
                                            <ul className="default_option">
                                                <li>
                                                    <div className="option pizza">
                                                        <div className="">
                                                            <select className='iZgYlJ' onChange={(e: any)=>setChan(e.target.value)}>
                                                                <option value="">Select One</option>
                                                                <option value="BNB">BNB</option>
                                                                <option value="BUSD">BUSD</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>

                                        </div>

                                    </div>
                            </div>
                        </div>
                        <div className="tab__form" style={{marginBottom: "5px"}}>
                            <p>You Buy</p>
                            <div className="form__entry">
                                <input type="text" id="qttinputid" value={chan=='BNB'?bal*400000:bal*1000} readOnly/>
                                    <div className="wrapper__coin">
                                        <div className="select_wrap ">
                                            <ul className="default_option">
                                                <li>
                                                    <div className="option pizza">
                                                        <div className="icon">
                                                            <img loading="lazy" className="img-fluid crypt-imgp" src={logo} alt="MAHA" width="25px" height="25" />
                                                        </div>
                                                        &nbsp;FINO
                                                    </div>
                                                </li>

                                            </ul>




                                        </div>

                                    </div>
                            </div>
                        </div>
                        
                        <button id="affiliate-download" className="cta__btn" onClick={()=>fetch({params: {...options, msgValue:bal}})} disabled={isFetching}>{tab} FINO (INR) NOW </button>
                        {data && <pre>
      {JSON.stringify(data,
        null,
        2,
      )}
    </pre>}
                    </div>
                </div>
            </div>
        </Col>
    )
}