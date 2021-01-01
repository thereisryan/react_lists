import logo from './logo.svg';
import React, { useState } from 'react';
import Char from './components/Char';
import Validation from './components/Validation';
import './App.css';

function App(props) {

  const [text, setText] = useState({
    content: "Enter text to check length".split(''),
    showLength: false,
    chars: [
      {id: 1, letter: "l"},
      {id: 2, letter: "o"},
      {id: 3, letter: "v"},
      {id: 4, letter: "e"}
    ]
  })

// const [text, setText] = useState({
//   chars: [
//     {id: "ljkfa", content: "Enter some text"}
//   ]
// })
//
// const outputTextHandler = (event, id) => {
//   const charsIndex = text.chars.findIndex(c => {
//     return c.id === id;
//   })
//
//   const char = {
//     ...text.chars[charsIndex]
//   }
//
//   char.content = event.target.value
//
//   const chars = [...text.chars];
//   chars[charsIndex] = char
//
//   setText({
//     ...text,
//     chars: chars
//   })
//
// }


  // onChange={(event) => outputTextHandler(event, text.content.id)}

  const showLengthHandler = (event) => {
    setText({
      ...text,
      content: event.target.value,
      showLength: true
    })
    // console.log(event.target.value);
  }

  let char = null;
  if ( text.showLength ) {
    char = (
        <div>
          {text.content.split('').map((char, index) => {
            // console.log(char, index);
            return <Char
              key={`char-${index}`}
              onClick={(event) => deleteCharHandler(event, index)}
            >
              {char}
            </Char>
          })}
        </div>

    )
  }

  const deleteCharHandler = (event, index) => {
    const chars = [...text.content];
    setText({
      ...text,
      content: (text.content.slice(0, index) + text.content.slice(index + 1, text.content.length))
    })
  }

  const charHandler = (event, id) => {
    const charIndex = text.chars.findIndex(c => {
      return c.id === id;
    })

    const char = {
      ...text.chars[charIndex]
    }

    char.letter = event.target.value;

    const chars = [...text.chars];
    chars[charIndex] = char;

    setText({
      ...text,
      chars: chars
    })
    console.log(char.letter)
  }

  // const handleArr = () => {
  //   {char}
  // }

  return (
    <div className="App">
      <input type="text" placeholder={text.content} onChange={(event) => showLengthHandler(event)} />
      <p onChange={() => showLengthHandler}>{text.showLength ? text.content.length : ""}</p>
      <Validation length={() => text.content.length} doesShow={text.showLength}/>
      {char}
    </div>
  );
}

export default App;
