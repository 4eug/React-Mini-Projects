import './App.css';


function App() {
  return (
    <div className="bg-gray-300 flex justify-center items-center h-screen">
    <div className='relative cursor-pointer shadow-lg group overflow-hidden'>
      <img src="./assets/back-2.jpeg" className='h-96 duration-500 group-hover:opacity-0' alt="image1" />
      <img src="./assets/fro-2.jpeg" className='h-96 absolute top-0 z-[-1]' alt="image2" />
      <button className='absolute px-5 py-2 bg-white font-semibold rounded hover:bg-red-400 left-1/4 bottom-[-65px] group-hover:bottom-14 duration-700'>
        ADD CARD
        </button>
        <img src="./assets/eye-fill.svg" className='absolute group-hover:right-2 delay-100 w-11 p-3 bg-white hover:bg-red-400 duration-500 
        top-5 right-[-60px] rounded-full' alt="eyesvg" />
        <img src="./assets/award-fill.svg" className='absolute group-hover:right-2 delay-300 w-11 p-3 bg-white hover:bg-red-400 duration-500 
        top-[80px] right-[-60px] rounded-full' alt="awardsvg" />
        <img src="./assets/suit-heart-fill.svg" className='absolute group-hover:right-2 delay-500 w-11 p-3 bg-white hover:bg-red-400 duration-500 
        top-[140px] right-[-60px] rounded-full' alt="heartsvg" />
    </div>
    </div>
  );
}

export default App;
