import React from 'react';

const LanguageSelection = ({ languages, selectedLanguage, onSelectLanguage }) => {
  return (
    <div>
      <h2>Choose a Language</h2>
      <select value={selectedLanguage} onChange={(e) => onSelectLanguage(e.target.value)}>
        <option value="">Select a Language</option>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelection;
