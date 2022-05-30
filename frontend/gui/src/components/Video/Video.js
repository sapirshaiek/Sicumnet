import React from "react";
import "./Video.css";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";

export default function App() {
  return (
    <div className="App">
      <div className="title_inner">סרטון הדרכה</div>
      <YoutubeEmbed embedId="Fv-QmBtOtd8" />
    </div>
  );
}
