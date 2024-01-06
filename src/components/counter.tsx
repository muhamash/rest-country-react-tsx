import React from 'react';

interface CounterProps
{
    counter: any;
}

const Counter = (props: CounterProps) =>
{
    
    return (
        <div className='bg-amber-500 w-[200px] text-white flex space-x-2 justify-center rounded-md shadow-sm shadow-slate-400 py-5'>
            <p>Counter :</p>
            <p>{ props.counter }</p>
        </div>
    );
};

export default Counter;