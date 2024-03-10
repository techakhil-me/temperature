import React from 'react'
import BlurredCard from '../../components/Card.jsx';
import CollectionCard from '../../components/CollectionCard.jsx';
import Chips from '../../components/Chips.jsx';
import UserCard from '../../components/UserCard.jsx';
import StudyHoursChart from '../../components/StudyHoursChart.jsx'

const page = () => {

    const interests = ['Arts', 'Books', 'Gym',  'Cooking', 'Coding', 'Technology', 'Fashion', 'Formula 1', 'automobiles', 'Learning', 'Business', 'Entrepreneurship'];

  return (<div className='flex gap-40'>
    <div className='pl-10'>
        <div className='pb-10'><UserCard/></div>
        <div className='flex flex-wrap gap-2'>{interests.map((interest, index) => (
        <div key={index}><Chips interest={interest}/></div>        
      ))}</div>

      <div className='pt-10'><StudyHoursChart/></div>           
    </div>
    <div className='h-screen m-0 p-0'>
        <CollectionCard></CollectionCard>
    </div>
  </div>    

)
}

export default page
