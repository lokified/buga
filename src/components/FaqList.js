import React from "react";
import Faq from "./Faq";
import "./Faq.css";

function FaqList() {
  return (
    <>
      <section className="faq-section" id="faq">
        <div className="container">
          <p
            className="text-center"
            style={{ color: "#0c6a52", fontSize: "14px" }}
          >
            GET YOUR QUESTION ANSWER
          </p>
          <h2
            className="text-center"
            style={{ color: "#000", fontSize: "32px" }}
          >
            Frequently asked question
          </h2>

          <div style={{ margin: "5rem 0" }}>
            <Faq
              question="How to contact with riders emergency ?"
              answer="Get your website ads tests delivered at let collect sample from the victory of the managements that supplies best design system which guidelines ever with multiple features."
            />

            <Faq
              question="App installation failed, how to update system information?"
              answer="Rhino skin maybe thick but it can be quite sensitive to sunburns and insect bites which is why they like wallow so much – when the mud dries it acts as protection from the sunburns and insects."
            />

            <Faq
              question="Website response taking time, how to improve?"
              answer="Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home."
            />

            <Faq
              question="New update fixed all bug and issues"
              answer="If you’re looking to hunt a unicorn, but don’t know where to begin, try Lake Superior State University in Sault Ste. Marie, Michigan. Since 1971, the university has issued permits to unicorn questers."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqList;
