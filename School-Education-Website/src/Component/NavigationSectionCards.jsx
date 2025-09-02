import './NavigationSectionCardsStyle.css';
export default function NavigationSectionCards({title , imgSrc , description , buttonText}){
    return(
        <div className="navigateCards">
              <h1>{title}</h1>
              <img src={imgSrc} alt="decorate" />
              <p>
                {description}
              </p>
              <button>{buttonText}</button>
        </div>
    )
}