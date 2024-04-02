'use client';

import React, {memo, useEffect, useMemo, useState} from 'react';

type Props = {
  counter: number;
}

type DeepProps = {
  counter: {
    counter: number;
  }
}

const Component = memo(({ counter }: Props) => {
  useEffect(() => {
    console.log('Component has been rendered!!');
  });

  return <h3>{counter}</h3>
})
// const Component = ({ counter }: Props) => {
//   useEffect(() => {
//     console.log('Component has been rendered!!');
//   });
//
//   return <h3>{counter}</h3>
// }



const DeeperComponent = memo(({ counter }: DeepProps) => {
  useEffect(() => {
    console.log('DeeperComponent has been rendered!!');
  });

  return <h3>{counter.counter}</h3>
})
// const DeeperComponent = ({ counter }: DeepProps) => {
//   useEffect(() => {
//     console.log('DeeperComponent has been rendered!!');
//   });
//
//   return <h3>{counter.counter}</h3>
// }

const Page = () => {
  const [, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(prevState => prevState + 1);
  }

  // const counter = useMemo(() => {
  //   return ({
  //     counter: 100
  //   })
  // }, []);

  useEffect(() => {
    console.log('Page has been rendered!!');
  }, []);

  return (
    <div>
      <h2>normal props component vs deep props component</h2>
      <Component counter={100} />
      <DeeperComponent counter={{ counter: 100 }} />
      {/*<DeeperComponent counter={counter} />*/}
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Page;