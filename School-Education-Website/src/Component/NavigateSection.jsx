import NavigationSectionCards from "./NavigationSectionCards";
import SectionHeaders from "./SectionHeaders";
import decor from "../images/decor.png";
import './NavigateSectionStyle.css';
export default function NavigateSection(){
    return(
        <div>
           <SectionHeaders
           buttonText="Eplore More"
           title="Navigate our Pages"
           description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
           />
           <div className="navigateSectionContainer">
            <NavigationSectionCards
            title="About us"
            imgSrc={decor}
            description="Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."
            buttonText="Learn More"
            />
            <NavigationSectionCards
            title="About us"
            imgSrc={decor}
            description="Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."
            buttonText="Learn More"
            />
           </div>
           <div className="navigateSectionContainer">
            <NavigationSectionCards
            title="About us"
            imgSrc={decor}
            description="Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."
            buttonText="Learn More"
            />
            <NavigationSectionCards
            title="About us"
            imgSrc={decor}
            description="Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."
            buttonText="Learn More"
            />
           </div>
        </div>
    )
}