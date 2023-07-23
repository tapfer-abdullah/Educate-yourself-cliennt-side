import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import CollegeCardsSection from "../CollegeCardsSection/CollegeCardsSection";
import { RotatingTriangles } from "react-loader-spinner";

const PopularColleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/colleges?limit=${3}`)
      // fetch(`https://toy-box-server.vercel.app/all-toys?limit=${limit}&name=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);

  if (colleges.length == 0) {
    return (
      <div className="flex justify-center mt-20">
        <RotatingTriangles
          visible={true}
          height="80"
          width="80"
          ariaLabel="rotating-triangels-loading"
          wrapperStyle={{}}
          wrapperClass="rotating-triangels-wrapper"
        />
      </div>
    );
  }

  return (
    <div>
      <SectionTitle
        title={"Popular Colleges"}
        subTitle={"Choose the best college for bright future"}
      ></SectionTitle>
      <CollegeCardsSection colleges={colleges}></CollegeCardsSection>
    </div>
  );
};

export default PopularColleges;
