import React from "react";
import "./exams.css";
import p2 from "../../assets/image 4.svg";
import p1 from "../../assets/image 5.svg";

const Exams = () => {
  return (
    <section className="exams-container">
      <div className="exams-header">
        <h2>
          we help you <span>excel</span> in
        </h2>
      </div>

      <div className="exams-main">
        <div className="g-8">
          <img src={p2} alt="" />
          <h2> Grade 8 Regional exam</h2>
        </div>
        <div className="g-12">
          <img src={p1} alt="" />
          <h2> Grade 12 National exam</h2>
        </div>
        <div className="g-13">
          <img src={p2} alt="" />
          <h2> University exams</h2>
        </div>
      </div>
    </section>
  );
};

export default Exams;
