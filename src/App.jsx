import React, { useState } from "react";
import { LanguageSelector } from "./components/LanguageSelector";
import { VoiceSelector } from "./components/VoiceSelector";
import { TextArea } from "./components/TextArea";
import { Buttons } from "./components/Buttons";
import { Header } from "./components/Header";
import { LoginForm } from "./components/LoginForm";
import { SignupForm } from "./components/SignupForm";

const App = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("Nepali");
  const [voice, setVoice] = useState("Male (Nepali)");
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <Header />
      <div className="App">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        {isLogin ? <LoginForm /> : <SignupForm />}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Switch to Sign Up" : "Switch to Login"}
        </button>
        <div className="flex justify-center items-center min-h-screen">
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
      </div>
    </div>
  );
};

export default App;