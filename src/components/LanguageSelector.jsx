import React from "react";


export const LanguageSelector = ({ language, setLanguage }) => {
 return (
   <select
     className="p-2 border bg-gray text-black rounded"
     value={language}
     onChange={(e) => setLanguage(e.target.value)}
   >
     <option value="Nepali">🇳🇵 Nepali</option>
   </select>
 );
};

