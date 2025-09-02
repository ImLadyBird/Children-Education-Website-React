import './BenefitSectionCardsStyle.css';
export default function BenefitScetionCards({imgSrc , title , description}){
    return(
        <div>
            <div className='cardsContainer'>
              <div>
                <img src={imgSrc} alt="icon" />
              <h3>{title}</h3>
              <p>
                {description}
              </p>
              </div>
            </div>
        </div>
    )}