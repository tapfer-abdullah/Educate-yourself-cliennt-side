/* eslint-disable react/prop-types */

import CollegeCard2 from "../../../../Components/CollegeCard/CollegeCard2";


const CollegeCardsSection = ({colleges}) => {
    // console.log(colleges);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
            {colleges.map(c => <CollegeCard2 key={c._id} college = {c}></CollegeCard2>)}
        </div>
    );
};

export default CollegeCardsSection;