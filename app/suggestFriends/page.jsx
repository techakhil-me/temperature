import Head from 'next/head';
import BlurredCustomCard from '../../components/CustomCard';

export default function Home() {

    const recommendedFriends = [
        { photo: "hero-card.jpeg", name: "Alice", status: "Online" },
        { photo: "hero-card.jpeg", name: "Bob", status: "Playing Chess" },
        { photo: "hero-card.jpeg", name: "Aztec", status: "Busy" },
        { photo: "hero-card.jpeg", name: "TechAkhil", status: "Coding" },
        { photo: "hero-card.jpeg", name: "Bhavik", status: "Learning React" },
        { photo: "hero-card.jpeg", name: "Fiona", status: "AFK" },
        { photo: "hero-card.jpeg", name: "Gabriel", status: "Listening to Music" },
        { photo: "hero-card.jpeg", name: "Hannah", status: "Designing UI" },
        { photo: "hero-card.jpeg", name: "Isaac", status: "Taking a Break" },
      ];

      const currentFriends = [
        { photo: "hero-card.jpeg", name: "David", status: "Online" },
        { photo: "hero-card.jpeg", name: "Emily", status: "In a Meeting" },
        { photo: "hero-card.jpeg", name: "Frank", status: "Away" },
        { photo: "hero-card.jpeg", name: "Grace", status: "Coding Together" },
        { photo: "hero-card.jpeg", name: "Henry", status: "Reviewing Code" },
        { photo: "hero-card.jpeg", name: "Isabella", status: "Brainstorming" },
      ];

  return (
    <div className="flex min-h-screen w-screen">
      <section className="w-2/3 bg-gradient-to-r from-teal-900 to-cyan-800 flex flex-col items-center justify-center text-white px-10">
        {/* Recommended friends section */}
        <h2 className="text-2xl font-bold mb-4">Recommended Friends</h2>
        <div className="grid place-content-center ml-36 justify-center grid-cols-2 gap-4">
          {/* Each card should be placed here */}
          <div className="grid place-content-center justify-center grid-cols-3 gap-4">
          {recommendedFriends.map((friend) => (
                <BlurredCustomCard key={friend.photo} photo={friend.photo} name={friend.name} status={friend.status} />
            ))}
          </div>
         
          {/* More friend cards... */}
        </div>
      </section>
      <section className="w-1/3 bg-gradient-to-r from-purple-800 to-pink-700 flex flex-col items-center justify-center text-white px-10">
        {/* Active friends section */}
        <h2 className="text-2xl font-bold mb-4">Active Friends</h2>
        <div className="flex flex-col space-y-4">
            <div className='grid place-content-center grid-cols-2 gap-4'>
            {currentFriends.map((friend) => (
                <BlurredCustomCard key={friend.photo} photo={friend.photo} name={friend.name} status={friend.status} />
            ))}
            </div>
        
          {/* More active friends... */}
        </div>
      </section>
    </div>
  );
}

    