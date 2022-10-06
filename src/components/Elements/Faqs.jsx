import React from "react";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "Why is the payout in BUSD, not in $FLOH?",
      content: `This is a massive advantage of FLOH compared to other crypto projects. Halloween Floki, 
      like every coin on the market, might fluctuate in value a lot. In contrast, BUSD is very stable, 
      almost 1:1 to USD, which in result, reduces the risk of your investment. With decent volume, your 
      investment will pay for itself over time.`,
    },
    {
      title: "What is slippage for?",
      content:
        "To set the tolerance on the maximum percentage of price movement you can live with. IT IS NOT A TAX.",
    },
    {
      title: "Why 8% tax and when is it applied?",
      content: `It is applied to EVERY TRANSACTION, this includes: Buys, Sells and Transfers.
       4% gets redistributed to all holders, 3% to marketing, and 1% to the liquidity pool. `,
    },
    {
      title: "Why am I not receiving rewards?",
      content: `Rewards are directly related to trading volume and your bag size. 
      The higher the volume, the more rewards you earn!`,
    },
    {
        title: "What is AMA and when do they happen?",
        content: `Ask Me Anything, (AMA) is an open space where investors can talk to the developers and ask questions. 
        The Halloween Floki team will be holding AMA’s on a regular schedule. Make sure to join our telegram to learn 
        more about the schedule!`,
      },
      {
        title: "What is the contract address?",
        content: `The address is as follows:

        0x2c0e76dade015bc390a13c1b80cc1bafd9edd326`,
      },
  ],
};

const styles = {
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
  expandIcon: "+",
  collapseIcon: "-",
};

const Faqs = () => {
  return (
    <>
      <div className="faqs">
        <div className="container-fluid">
          <div className="faqs_txt">
            <p>FAQS</p>
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-12 mt-5">
              <Faq data={data} styles={styles} config={config} />
            </div>
            <div className="col-md-6 col-12">
                <div className="text-center faq_img"><img src="assets/images/question.png" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
