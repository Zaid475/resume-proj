import React from 'react';
import shoping from "../components/shoping_no_bg.png";

const Home = () => {
  return (
    <div>
      <div
        className="navbarcontainer"
        style={{
          display: "flex",
          border: "1px solid black",
          height: "100px",
          width: "100%",
        }}
      >
        <div style={{ border: "1px solid red", width: "10%" }}>
          <img
            src={shoping}
            alt="shop"
            height="110px"
            width="180px"
            style={{ marginRight: "120px" }}
          ></img>
        </div>
        <div style={{ border: "1px solid red", width: "10%" }}>
          <h4 style={{ border: "1px solid black", marginTop: "30px" }}>MEN</h4>
        </div>
        <div style={{ border: "1px solid red", width: "10%" }}>
          <h4 style={{ border: "1px solid black", marginTop: "30px" }}>WOMEN</h4>
        </div>
        <div style={{ border: "1px solid red", width: "10%" }}>
          <h4 style={{ border: "1px solid black", marginTop: "30px" }}>KIDS</h4>
        </div>
        <div style={{ border: "1px solid red", width: "10%" }}>
          <h4 style={{ border: "1px solid black", marginTop: "30px" }}>
            ACCESSORIES
          </h4>
        </div>
        <div style={{ border: "1px solid red", width: "30%" }}>
          <div
            className="searchbarcontainer"
            style={{
              display: "flex",
              alignItems: "center",
             marginLeft:"20px",
              marginTop: "27px",
            }}
          >
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=search"
            />
            <span
              style={{
                border: "1px solid orange",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="material-symbols-outlined"
            >
              search
            </span>
            <input
              type="text"
              placeholder="Search for products, brands and more"
              style={{ height: "30px", width: "300px" }}
            ></input>
          </div>
        </div>
        <div style={{width:"10%",border:"1px solid green"}}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=person" />
        <span style={{fontSize:"40px",  marginTop:"20px"}} class="material-symbols-outlined">person</span>
        <p>LOG IN/SIGN UP</p>
            
            </div>
      </div>
    </div>
  );
};

export default Home;
