import React from 'react';

const Question = ({ question, options, selectedOption, onOptionSelect }) => {
  return (
    <div className=' font-serif flex flex-col min-h-[150px] justify-around gap-2'>
      <p className='text-[24px] py-2 px-4 border-2 rounded-md'>{question}</p>
      <ul className='flex flex-row flex-wrap justify-between gap-2'>
        {options.map((option, index) => (
          <li key={index} className='w-[40%] py-2 px-4 border-2 gap-1 rounded-md'>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedOption === option}
                onChange={() => onOptionSelect(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
