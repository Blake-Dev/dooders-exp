/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import "./Card.css";
import doodsIcon from '../../assets/doods.svg'

function Card({ doods, handleCardClick, handleButtonClick }) {
  if (!doods) return <EmptyCard handleButtonClick={handleButtonClick} />

  let { name, image } = doods;
  if (!image) {
    image = doodsIcon;
  }
  return (
    <div className="Card">
      <div className="Card-top" onClick={handleCardClick}>
        <div className="Card-left">
          <div className="Card-left-img-container">
            <span>{name}</span>
            <img src={image} />
          </div>
        </div>
        <div className="Card-right">
          <div className="Card-right-stat">
            <span>Last Potty:</span>
            <p>18 min ago</p>
          </div>
          <div className="Card-right-stat">
            <span>Last Meal:</span>
            <p>Breakfast</p>
            <p>3 hrs ago</p>
          </div>
        </div>
      </div>
      <div className="Card-bottom">
        <Button text="Add Event" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

function EmptyCard({ handleButtonClick }) {
  return (
    <div className="Card">
      <div className="Card-empty">
        <Button text="Add Dooders" onClick={() => handleButtonClick(true)} />
      </div>
    </div>
  );
}

export default Card;
