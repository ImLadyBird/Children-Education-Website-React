import './TestimonialsSectionCardsStyle.css';
export default function TestimonialsSectionCards({imgSrc , title , description , className}){
    return (
        <div className={className}>
            <img src={imgSrc} alt="person's image" />
            <h2>{title}</h2>
            <span>⭐⭐⭐⭐⭐</span>
            <p>
              {description}
            </p>
        </div>
    )
}