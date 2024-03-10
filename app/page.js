import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Landing Page</title>
        <meta name="description" content="A landing page example" />
      </Head>

      <main className="flex justify-center align-middle min-h-screen">
        <section className="w-1/2 bg-[#9656a1] flex flex-col items-center justify-center text-white px-10">
        <div className='flex flex-col justify-center self-center text-center gap-2'>
          <div>
              <video className=' align-top' src='/new_left_screen.mp4'></video>
          </div>
          <div>
          <h1 className="text-4xl text-center font-bold mb-8"><a href='/self'>Study Solo</a></h1>
            <p className="text-lg text-center mb-10">
              Create your perfect study environment with atmospheric backgrounds,
              personal timers, and goals-in your very own study room.
            </p>
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Start Solo Study
            </button>
          </div>
        </div>
        
          
        </section>
        <section className="w-1/2 bg-gradient-to-b from-[#FF8E3C] to-[#FF3939] flex flex-col items-center justify-center text-white px-10">
          
          <div className='flex flex-col justify-center self-center text-center gap-2'>
            <div>
              <video className=' align-top' src='/new_right_screen.mp4'/>
            </div>
            <div>
            <h1 className="text-4xl text-center font-bold mb-8">Study Together</h1>
              <p className="text-lg text-center mb-10">
                Join motivated students from all over the world in one of our group
                study rooms to boost your productivity and find your study flow.
              </p>
              <div className='flex text-center justify-center justify-items-center gap-8'>
                
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              <a href='/channel/focus'>Join Group Study</a>
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              <a href='/channel/focus'> Create Group Study Room</a>
              </button>
              </div>
              
              <p className=" text-xs text-white mt-10">
                Note: Your devices are deactivated when joining. You can activate
                your camera as you like.
              </p>
                </div>
          </div>
          
          
        </section>
      </main>
    </div>
  );
}
