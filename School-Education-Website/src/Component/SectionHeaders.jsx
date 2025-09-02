import './SectionHeadersStyles.css';


export default function SectionHeaders({buttonText , title , description}){
    return(
        <div className="sectionHeaders">
            <button>{buttonText}</button>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}