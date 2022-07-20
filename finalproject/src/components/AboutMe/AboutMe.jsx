import React from "react";
import "./aboutMe.css";
import { useTheme } from "../../context/ThemeContext";

const AboutMe = () => {
  let { theme } = useTheme();
  return (
    <>
      <div className="py-5" id="aboutMeDark">
        <div className="wow heading d-flex align-items-center justify-content-center  flex-column">
          <h3 className="text-white">ABOUT ME</h3>
          <div className="headingBorder bg-white"></div>
        </div>
        <div className="aboutMeContainer">
          <div className="row container mx-auto">
            <div
              id="questionImgContainerDark"
              className={
                "col-lg-5 d-flex align-items-center justify-content-center mx-auto"
              }
            ></div>
            <article className="col-lg-6 col-md-8 d-flex align-items-center justify-content-center flex-column mx-auto">
              <h2
                className="text-white"
                style={{ borderBottom: "1px solid black", padding: "10px" }}
              >
                My Software Adventure
              </h2>
              <p className="text-center pcss">
                I thought that creating a product and varying it may be
                something that i can enjoy. Thus I knew the next step would be
                to make a research about programming languages needed for those
                skills. As a result I got acquainted with Javascript, HTML and
                CSS. I started to watch videos and I enjoyed what I made, even
                if it seemed small. I was practising and improving myself but
                still I was not feeling that my potential was faced with a
                proper leading. Then I found out about the bootstrap. I started
                to write more codes in less time. This program gave me
                opportunity to earn different experiences and, as a result, I
                was able to make clones of various sites - I could code most of
                the websites which I saw. Unfortunatelly I started loosing my
                motivation whenever i saw that I was lacking some skills needed
                for tasks that i wanted to accomplish. When I couldn't do
                whatever I wanted i was feeling helpless.
              </p>
            </article>
          </div>
          <div className="row container mx-auto">
            <article className="col-lg-6 col-md-8 d-flex align-items-center justify-content-center mx-auto">
              <p className="text-center pcss">
                I can easly say that this stage was the hardest for me as a
                self-learner. I didn't go with the stream though, I started to
                research how can I skip the self-learning process and I found
                about bootcamps. I started to apply to all of the programs about
                frontend development. Finally, I came across Patika.dev and
                Kodluyoruz team. During the Bootcamp I have initiated new
                friendships with other frontend developer candidates. I didn't
                feel like I was alone anymore in learinig journey. When I got
                stuck, I had poeople around me who could always help me to look
                for a solution. Midway this process, I met with ReactJS. I
                decided to improve my skills also in some advice to my friends
                who started learning alone - I can say that studying with
                friends is better idea for the education process. When you get
                stuck, your motivation drops and you may give up. Don't be shy
                to ask for help and don't be shy to communicate with other
                people. The most important thing is to Never Give Up! Friends
                who want to ask me a question can do this without any
                hesitation. I will make my best to give the most an adequate and
                well-thought-out answer.
              </p>
            </article>
            <div
              id="questionImgContainer2"
              className="col-lg-5 d-flex align-items-center justify-content-center mx-auto"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
