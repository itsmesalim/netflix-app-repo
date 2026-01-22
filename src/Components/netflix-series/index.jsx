import { Link } from "react-router-dom";
import "./style.css";

const NetflixSereisCard = ({ imgSrc, discription, title, link }) => {
  return (
    <>
      <div className="netflex-card">
        <img src={imgSrc} alt="my picture" className="netflex-card-img" />

        <div className="netflex-card-info">
          <h3 className="netflex-card-title">{title}</h3>
          <p className="netflix-card-discription">{discription}</p>
          <Link to={link} target="_blank">
            <button>Watch Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NetflixSereisCard;
