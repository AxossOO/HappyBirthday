import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const [click, setClicked] = useState(false);
  const [read, setRead] = useState("Will you go out with me, Manoora?");
  const [gifSrc, setGifSrc] = useState();
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [submitting, setSubmitting] = useState(false);

  const handleClicker = () => {
    setClicked(!false);
    setGifSrc("https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif");
    setSubmitting(true);
    setTimeout(() => {
      document.getElementById("form").submit();
    }, 3000);
  };

  const handleMouseOver = () => {
    const maxX = 200;
    const maxY = 250;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    setButtonPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="relative font-Nunito flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col">
        <div className="text-[#e94d58] text-3xl font-Nunito text-center">
          {read}
        </div>
        <img alt="gif" src={gifSrc} className="ml-8" />
      </div>
      <div className="flex justify-center items-center flex-row space-x-14 mt-3 relative text-white ">
        <form id="form" action="https://getform.io/f/yb8pw5bv" method="POST">
          <input type="text" name="yes_input" className="hidden"></input>
          <button
            type="button"
            className="px-8 py-2 bg-[#ff3a47] rounded-lg cursor-pointer mr-5"
            onClick={() => {
              handleClicker(), setRead("See Ya Tommorow");
            }}
            disabled={submitting}
          >
            Yes
          </button>
        </form>
        <Wrapper
          className="px-8 py-2 bg-[#ff3a47] rounded-lg cursor-pointer"
          buttonPosition={buttonPosition}
          onMouseOver={handleMouseOver}
          onClick={handleMouseOver}
          onTouchMove={handleMouseOver}
        >
          No
        </Wrapper>
      </div>
    </div>
  );
}
const Wrapper = styled.div`
  position: relative;

  top: ${(props) => props.buttonPosition.y}px;
  left: ${(props) => props.buttonPosition.x}px;
`;
export default App;
