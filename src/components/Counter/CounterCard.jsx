import React from 'react'
import Counter from './Counter';

const CounterCard = () => {
  return (
    <div className="counterbg">
      <div className="experience grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pt-10 sm:pt-16 md:pt-20 pb-10 sm:pb-16 md:pb-[77px] container px-4 sm:px-6 lg:px-8">
        <Counter counter={37} suffix={"+"} title={"Years of Hard Work"} />
        <Counter counter={500} suffix={"K+"} title={"Happy Customer"} />
        <Counter counter={28} suffix={""} title={"Qualified Team Member"} />
        <Counter counter={750} suffix={"K+"} title={"Monthly Orders"} />
      </div>
    </div>
  );
}

export default CounterCard
