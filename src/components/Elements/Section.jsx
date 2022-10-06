import React from "react";
import Button from "@mui/material/Button";
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
const Section = () => {
  return (
    <>
      <div className="second_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-12">
              <div className="sec_txt">
                <p> WHAT IS HALLOWEEN FLOKI</p>
                <h2 className="mb-5">
                  From the Team That Brought You Valentine Floki
                </h2>
                <h5 className="mb-4">
                  Halloween Floki (FLOH) is a meme cryptocurrency token
                  operating on the BEP-20 Blockchain technology (Binance Smart
                  Chain). With the great experience, knowledge and wisdom of the
                  core team, FLOH will attempt to peak at the highest market cap
                  a Floki sub-project has ever reached, all while distributing
                  BUSD rewards every day to its holders.
                </h5>
                <h5 className="mb-5">
                  We are taking advantage of the upcoming Holiday to gain the
                  crypto community’s attention but as the weeks go by, this
                  project will gain its reputation through continuous
                  communication with its investors, aggressive marketing
                  campaigns, listings and constant deliveries from the
                  leadership team. Backed by cryptocurrency and stock market
                  whales, we invite you on this journey to the double-digits
                  millions market cap!
                </h5>
              </div>
              <div>
                <Button
                  variant="contained"
                  className="mr-4"
                  style={{ backgroundColor: "#1da1f2", padding: "12px 2px" }}
                >
                  <TwitterIcon />
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#f27022",
                    padding: "12px 2px",
                    marginLeft: "10px",
                  }}
                >
                  <TelegramIcon />
                </Button>
              </div>
            </div>
            <div className="col-md-7 col-12">
                <div className="text-center right_img"> 
                    <img src="assets/images/logo.png" alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
