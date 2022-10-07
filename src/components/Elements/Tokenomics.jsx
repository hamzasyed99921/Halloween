import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { FaWater } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const Tokenomics = () => {
  return (
    <>
      <div className="tokenomics">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="sec_txt">
                <h2>WHAT IS OUR TOKENOMICS</h2>
                <br />
                <p>
                  At Halloween Floki, we are designing a project based on
                  definitive market rules and fundamental economic principles.
                  Halloween Floki reconciles a high-performance protocol with
                  integral price stability features.
                </p>
                <br />
                <p>Total Sudopply: 1 000 000 000 000 FLOH</p>
                <br />
                <p>8% Buy and Sell Tax:</p>
                <ul className="mt-4">
                  <li>
                    4% holders rewards: Dividend tax on all transactions that
                    will be distributed every 24 hours to holders in BUSD.
                  </li>
                  <li>
                    1% liquidity: Liquidity tax on all transactions to prevent
                    major price fluctuation after a large trade by filling the
                    liquidity pool.
                  </li>
                  <li>
                    3% marketing: Marketing tax on all transactions allows the
                    Halloween Floki marketing team to reinvest and grow the
                    project to its maximum potential.
                  </li>
                </ul>
                <br />
                <h2>WHAT ARE OUR FEATURES</h2>
              </div>
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col-md-3 col-12">
              <div className="card" style={{ maxWidth: "370px" , height: '90%'}}>
                <FaDollarSign className="my-4" size={90} color={'white'} />
                <div className="card-body">
                  <h5 className="card-title">$BUSD Rewards</h5>
                  <p className="card-text">
                    Earn automatic Binance pegged USD ($BUSD), rewards by
                    holding your Halloween Floki Coin – 4% of every buy,
                    transfer and sell transaction is redistributed automatically
                    to $FLOH holders. You will receive the rewards automatically
                    in your wallet or claim your rewards manually in our
                    upcoming reward app tracker.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="card" style={{ maxWidth: "370px", height: '90%' }}>
                <HiSpeakerphone className="my-4" size={90} color={'white'}/>
                <div className="card-body">
                  <h5 className="card-title">Marketing</h5>
                  <p className="card-text">
                    3% of every transaction will directly go to the marketing
                    wallet in order to ensure an increase in exposure throughout
                    advertisement platforms, social media and to secure
                    contracts and deals with influencers. This will help FLOH
                    achieve an international status and to be known within every
                    community!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="card" style={{ maxWidth: "370px" , height: '90%'}}>
                <FaWater className="my-4 mx-3" size={90} color={'white'}/>
                <div className="card-body">
                  <h5 className="card-title">Liquidity Pool</h5>
                  <p className="card-text">
                    Our Smart contract deposits 1% from every transaction as
                    $FLOH and $BNB into a liquidity pool which has been locked
                    and certified. Pancakeswap fixes the low liquidity problems
                    of DEXs through their Liquidity Pools, ensuring traders can
                    always Buy & Sell without liquidity issues. A bigger
                    liquidity pool will provide more stability to the $FLOH
                    price.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="card" style={{ maxWidth: "370px" , height: '90%'}}>
                <RiAdminFill className="my-4" size={90} color={'white'}/>
                <div className="card-body">
                  <h5 className="card-title">Anti-Whale Mechanism</h5>
                  <p className="card-text">
                    Our Anti-Whale mechanism ensures that no single transaction
                    order can amount to more than 1% of the total supply of
                    $FLOH. The Anti-Whale Mechanism won’t necessarily stop
                    whales from selling, but having a maximum limit helps to
                    prevent large selloffs and price manipulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
