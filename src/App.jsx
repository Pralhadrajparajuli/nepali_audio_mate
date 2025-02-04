import React, { useState } from "react";
import {LanguageSelector} from "./components/LanguageSelector";
import {VoiceSelector} from "./components/VoiceSelector";
import {TextArea} from "./components/TextArea";
import {Buttons} from "./components/Buttons";

const App = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("Nepali");
  const [voice, setVoice] = useState("Male (Nepali)");

  return (
    <div className="flex justify-center  items-center min-h-screen min-w-screen  bg-gray">
      <div className="w-[500px] p-6 bg-white rounded-lg shadow-lg">
        {/* Language and Voice Selection */}
        <div className="flex justify-between mb-4">
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <VoiceSelector voice={voice} setVoice={setVoice} />
        </div>

        {/* Text Input */}
        <TextArea text={text} setText={setText} />

        {/* Buttons */}
        <Buttons text={text} />
      </div>
    </div>
  );
};

export default App;