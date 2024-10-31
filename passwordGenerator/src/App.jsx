import { useCallback, useEffect, useState, useRef } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);

  const inputRef = useRef(null);

  const generatePassword = useCallback(() => {
    let string = "ABCDEFGHIJKLMONPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()_-+=<>?/|";
    const numbers = "0123456789";

    if (symbol) string += symbols;
    if (number) string += numbers;

    let pass = "";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * string.length);
      pass += string.charAt(char);
    }

    setPassword(pass);
  }, [length, symbol, number]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyNumber = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
      navigator.clipboard.writeText(password)
    }
  };

  return (
    <>
      <div className='bg-black w-full h-screen text-orange-600'>
        <div className='flex justify-center items-center'>
          <div className='md:w-[50%] lg:w-1/2 mt-20 h-40 bg-gray-700'>
            <h1 className='text-center font-bold text-white text-xl'>Password Generator</h1>
            <div className='mx-4 py-3 border-none'>
              <input
                type="text"
                className='rounded-l-lg w-[80%] h-10'
                readOnly
                value={password}
                ref={inputRef}
              />
              <button onClick={copyNumber} className='bg-blue-500 text-white w-[20%] h-10 py-0 px-2 rounded-r-lg'>Copy</button>
            </div>
            <div className='mt-4 grid w-full grid-cols-3 items-center gap-5 mx-4'>
              <div className='grid grid-cols-2 gap-1'>
                <input
                  type="range"
                  className='sm:min-w-10 md:min-w-20'
                  min="8"
                  max="100"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                />
                <label className='text-sm'>Length: {length}</label>
              </div>
              <div className='flex gap-1'>
                <input
                  type="checkbox"
                  checked={symbol}
                  onChange={() => setSymbol(prev => !prev)}
                />
                <label className='text-sm'>Symbol</label>
              </div>
              <div className='flex gap-1'>
                <input
                  type="checkbox"
                  checked={number}
                  onChange={() => setNumber(prev => !prev)}
                />
                <label className='text-sm'>Number</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
