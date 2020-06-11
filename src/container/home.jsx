import React, { useState } from "react";
import { connect } from "react-redux";
import Cuaca from "../components/cuaca";
import Header from "../components/header";
const menuList = ["Weather", "Population"];
function Home(props) {
  const [menu, setmenu] = useState(0);

  return (
    <div className="container">
      <Header {...props} menu={menu} />
      <div className="wrapper">
        <div className="sidebar">
          <div className="item item-header">Menu</div>
          {menuList.map((item, idx) => (
            <div
              className={`item ${idx === menu ? "active" : ""}`}
              onClick={() => menu !== idx && setmenu(idx)}
              key={idx}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="content">
          {menu === 1 ? (
            <div className="under-construction">
              Sorry, this page is under construction
            </div>
          ) : (
            <Cuaca {...props} />
          )}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  weather: state.Weather,
});
export default connect(mapStateToProps)(Home);
