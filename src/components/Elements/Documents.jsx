import React from "react";
import { TiTick } from "react-icons/ti";
import "antd/dist/antd.css";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, message } from "antd";


  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

const menu = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: "KYC",
        key: "1",
        icon: <UserOutlined />,
      },
      {
        label: "Audit",
        key: "2",
        icon: <UserOutlined />,
      },
      {
        label: "Whitepaper",
        key: "3",
        icon: <UserOutlined />,
      },
    ]}
  />
);

const Documents = () => {
  return (
    <>
      <div className="documents">
        <div className="container-fluid container_doc">
          <div className="row">
            <div className="col-md-7 col-12">
              <div className="documnt_txt">
                <p>Whitepaper</p>
                <h2 >Read Our Documents</h2>
              </div>

              <div className="items d-flex justify-content-between mb-5">
                <div className="icon_txt mb-2">
                  <TiTick className="icon" size={35} />
                  <span className="">KYC</span>
                </div>
                <div className="icon_txt mb-2">
                  <TiTick className="icon" size={35} /> <span>Audit</span>
                </div>
                <div className="icon_txt mb-2">
                  <TiTick className="icon" size={35} /> <span>Whitepaper</span>
                </div>
              </div>
              <div>
                <Dropdown overlay={menu}>
                  <Button style={{backgroundColor: '#f27022',border: 'none', color: 'white', fontSize: '18px' }}>
                    {/* <Space> */}
                      Download
                      <DownOutlined />
                    {/* </Space> */}
                  </Button>
                </Dropdown>
              </div>
            </div>
            <div className="col-md-5 col-12 mt-4">
                <div className="doc_img text-center">
                    <img src="assets/images/document.png" alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documents;
