'use client';

import React, {useRef, useState} from 'react';

const Page = () => {
  const [syncCode, setSyncCode] = useState(0);
  const [task, setTask] = useState(0);
  const [microTask, setMicroTask] = useState(0);

  const handleSyncCodeClick = () => {
    for (let i = 0; i < 100000; i++) {
      setSyncCode(i)
    }
  }

  const handleTaskClick = () => {
    for (let i = 0; i < 100000; i++) {
      setTimeout(() => {
        setTask(i);
      }, 0);
    }
  }

  const handleMicroTaskClick = () => {
    for (let i = 0; i < 100000; i++) {
      queueMicrotask(() => {
        setMicroTask(i);
      })
    }
  }

  return (
    <div>
      <ul>
        <li>동기 코드: <button onClick={handleSyncCodeClick}>{syncCode}</button></li>
        <li>Task: <button onClick={handleTaskClick}>{task}</button></li>
        <li>Micro Task: <button onClick={handleMicroTaskClick}>{microTask}</button></li>
      </ul>

      <button>모두 동시 실행</button>
    </div>
  );
};

export default Page;