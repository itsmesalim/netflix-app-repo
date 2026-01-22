import NetflixSereisCard from "../../Components/netflix-series";
import "./style.css";
import jsonData from "./jsonData";

const NetflixSeries = () => {
  return (
    <>
      {/* <div style={netflexContainer} > */}
      <div className="netflex-container">
        {jsonData.map((item, index) => {
          return (
            <NetflixSereisCard
              key={item.id || index}
              imgSrc={item.imgSrc}
              discription={item.discription}
              title={item.title}
              link={item.link}
            />
          );
        })}
      </div>
    </>
  );
};
export default NetflixSeries;
