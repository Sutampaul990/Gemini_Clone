import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    prevPrompt,
    setPrevPrompt,
    onSent,
    recentPrompt,
    setRecentPrompt,
    input,
    showResult,
    loading,
    resultData,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Sir</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>

              <div className="card">
                <p>Briefly summarize this concept : Urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div className="card">
                <p>
                  Come up with a product name for a new app that helps people
                  learn how to play the violin.
                </p>
                <img src={assets.message_icon} alt="" />
              </div>

              <div className="card">
                <p>Improve the readability of following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <>
                    <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                  </>
                ) : (
                  <>
                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                  </>
                )}
              </div>
            </div>
          </>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <div className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. <span>Your privacy & Gemini Apps</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
