
import React from "react";


export const VoiceSelector = ({ voice, setVoice }) => {
 return (
   <select
     className="p-2 border bg-grey text-black rounded"
     value={voice}
     onChange={(e) => setVoice(e.target.value)}
   >
     <option value="Male (Nepali)">🔊 Male (Nepali)</option>
     <option value="Female (Nepali)">🔊 Female (Nepali)</option>
   </select>
 );
};

