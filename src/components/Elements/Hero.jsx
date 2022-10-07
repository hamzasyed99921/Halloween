import React from "react";
import Button from "@mui/material/Button";
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
const Hero = () => {
  return (
    <>
      <>
        <div className="bg_image">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 d-flex align-items-center">
                <div>
                  <p className="left_heading" data-aos="zoom-in" data-aos-duration="1000">Halloween Floki</p>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="right_hero">
                  <h2 className="text-center text-white">$FLOH Live Now!</h2>
                  <div className="text-center">
                    <Button
                      variant="contained"
                      className="hero_btn"
                      style={{
                        backgroundColor: "#745F98",
                        color: "#ffff",
                        padding: "17px 40px 17px 40px",
                        borderRadius: "40px",
                      }}
                    >
                      Buy
                    </Button>
                  </div>
                  <div className="text-center my-3">
                    <Button variant="contained" className="mr-4" style={{backgroundColor: '#1da1f2' , padding: '12px 2px'}}><TwitterIcon/></Button>
                    <Button variant="contained"  style={{backgroundColor: "#745F98", padding: '12px 2px', marginLeft: '10px'}}><TelegramIcon/></Button>
                  </div>
                  <p className="text-center mt-5 text-white" style={{fontSize: '14px', fontWeight: '600'}}>Contract : 0x2c0e76dade015bc390a13c1b80cc1bafd9edd326</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Hero;
