import React from 'react'
import Button from "@mui/material/Button";
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="container_fluid">
            <div className='text-center mb-5'> <Button
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
                </Button></div>
          <hr style={{color: '#414073'}} />
          <p className='text-center text-white py-4' style={{fontSize: '18px', fontWeight: '400'}}>Copyright © 2022. All rights reserved by Halloween Floki. Contact: hello@halloweenfloki.co</p>
        </div>
      </footer>
    </>
  )
}

export default Footer