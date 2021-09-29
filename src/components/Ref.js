import { useRef, useState } from 'react';

export const Ref = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef(null)

    const handleClearInput = () => {
      inputRef.current.value = ''; 
      inputRef.current.focus();
    };

    return (
      <>
        <h1>Use Ref</h1>
        <form>
          <input type="text" value={value} ref={inputRef} onChange={(e) => setValue(e.target.value)} />
          <button type="button" onClick={handleClearInput}>Clear Input</button>
        </form>
      </>
    )
}