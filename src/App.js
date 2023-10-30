import logo from './logo.svg';
import "./css/style.css"
import Marquee from 'react-fast-marquee';

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#181818] text-neutral-200">
      <div className='w-[50%] flex flex-col'>
        <div className='flex space-y-2 flex-col text-center mb-14'>
          <span className='text-5xl font-bold'>
            Skills that I have
          </span>
          <span className='text-2xl'>
            These are the technologies I've worked with
          </span>
        </div>
        <Marquee autoFill pauseOnClick>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400'>
            Tailwindcss
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-purple-700'>
            Bootstrap
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-orange-700'>
            HTML
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-500'>
            CSS
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-yellow-500'>
            Javascript
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-green-500'>
            Node JS
          </div>
        </Marquee>
        <Marquee autoFill pauseOnClick direction='rigth'>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-500'>
            ReactJS
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer'>
            NextJS
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-neutral-500'>
            Solidity
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-orange-500'>
            Firebase
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-green-400'>
            Mongodb
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-blue-500'>
            Typescript
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default App;
